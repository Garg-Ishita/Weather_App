
import { DateTime } from 'luxon'
const API_KEY = "da68ecb0525ffcd373fcd972b0ebbb63";
const BASE_URL = "https://api.openweathermap.org/data/2.5";



const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  console.log(url);
  return fetch(url).then((res) => res.json())
    .then((data) => data);
};

const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    dt_text,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed }
  } = data

  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    dt_text,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
  };
};


const formatForecastWeather = (data) => {
  let list = data.list;
  let daily = [];
  let hourly = [];
  list.forEach((weather) => {
    let date = weather.dt_txt.split(" ")[0]
    let time = weather.dt_txt.split(" ")[1]
    if (time === "12:00:00") {
      console.log(weather)
      daily.push({
        title: new Date(date).getDay(),
        icon: weather.weather[0].icon,
        temp: weather.main.temp,
      })
    }
    hourly.push({
      title: time,
      icon: weather.weather[0].icon,
      temp: weather.main.temp,
    })
  })

  return { daily, hourly };
}





const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData('weather', searchParams).then(
    formatCurrentWeather
  );
  const { lat, lon } = formattedCurrentWeather
  const formattedForecastWeather = await getWeatherData('forecast', searchParams).then(formatForecastWeather)
  //   return {...currentWeather, ...currentWeatherForecast};

  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

const formatToLocalTime = (secs, zone, format = "cccc , dd LLL yyyy' | Local time:'hh:mm  a") => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

// const formatToLocalTime=
// (secs , zone ,format ="cccc, dd LLL yyyy' | Local time:' hh:mm a")=>
//   DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`;



export default getFormattedWeatherData;

export { formatToLocalTime, iconUrlFromCode };

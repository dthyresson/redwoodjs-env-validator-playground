import got from 'got'

export const getWeather = async ({ zip }) => {
  const json = await got(
    `http://api.openweathermap.org/data/2.5/weather?zip=${zip},US&appid=${process.env.OPEN_WEATHER_MAP_TOKEN}`
  ).json()

  if (json.cod === '404') {
    return new Error(`${zip} isn't a valid US zip code, please try again`)
  }

  return {
    zip,
    city: json.name,
    conditions: json.weather[0].main,
    temp: Math.round(((json.main.temp - 273.15) * 9) / 5 + 32),
    icon: `http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`,
  }
}

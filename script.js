getWeatherData = (city) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "7b8b07b711msh1f6c8859cac4dfdp1d0fcajsn78edc1127589",
      "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
    },
  };

  return fetch(`https://open-weather13.p.rapidapi.com/city/${city}`, options)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.error(err));
};

const searchCity = async () => {
  const city = document.getElementById("city-input").value;
  const data = await getWeatherData(city);
  showWeatherData(data);
};

const showWeatherData = (weatherData) => {
  document.getElementById("weather-type").innerText =
    weatherData.weather[0].main;
  document.getElementById("city-name").innerText = weatherData.name;
  document.getElementById("temp").innerText = Math.round(
    (weatherData.main.temp - 32) / 1.8
  );
  document.getElementById("min-temp").innerText = Math.round(
    (weatherData.main.temp_min - 32) / 1.8
  );
  document.getElementById("max-temp").innerText = Math.round(
    (weatherData.main.temp_max - 32) / 1.8
  );
};

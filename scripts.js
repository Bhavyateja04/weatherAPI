const apiKey = "943115356bc2ec2d0898ab1801cf6fcf"; // Replace with your OpenWeatherMap API key

function getWeather() {
  const city = document.getElementById("cityInput").value;
  const weatherInfo = document.getElementById("weatherInfo");

  if (!city) {
    weatherInfo.innerHTML = "Please enter a city name.";
    return;
  }
//url for connecting with api
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then(data => {
      const { name, sys, main, weather, wind } = data;
      weatherInfo.innerHTML = `
        <h2>${name}, ${sys.country}</h2>
        <p>Temperature: ${main.temp} °C</p>
        <p>Weather: ${weather[0].description}</p>
        <p>Humidity: ${main.humidity}%</p>
        <p>Wind Speed: ${wind.speed} m/s</p>
        <img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="icon" />
      `;
    })
    .catch(err => {
      weatherInfo.innerHTML = "City not found. Please try again.";
    });
}

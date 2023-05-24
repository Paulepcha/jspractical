
// const API_KEY = "54973fb2edb4202ed2591c12f80ec06e" // Replace with your actual API key
//selector variable
const apiKey = '54973fb2edb4202ed2591c12f80ec06e'; // Replace with your OpenWeatherMap API key
const city = 'Gangtok';

const weatherContainer = document.getElementById('weather');

// Fetch weather data from API
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    const temperature = Math.round(data.main.temp - 273.15);
    const description = data.weather[0].description;

    const weatherHTML = `<h2>${city}</h2>
                         <p>Temperature: ${temperature}°C</p>
                         <p>Description: ${description}</p>`;

    weatherContainer.innerHTML = weatherHTML;
  })
  .catch(error => {
    console.log('Error:', error);
    weatherContainer.innerHTML = 'Failed to fetch weather data.';
  });



const cityName = document.querySelector('.city-name');
const currentTempIcon = document.querySelector('.current-temp-icon');
const currentTemp = document.querySelector('.current-temp');
const currentTempDesc = document.querySelector('.current-temp-desc');
const maxTemp = document.querySelector('.max-temp');
const minTemp = document.querySelector('.min-temp');
const forecastContainer = document.querySelector('.forecast-weather');


const API_KEY = 'b629410234e07de7bc2071728a56eeb6';

function parseWeatherData(data){
    console.log(data);
    cityName.textContent = data.Name;
    currentTempIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}


function getcurrentweather(city){
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => parseWeatherData(data))
        .catch(error => console.error(error));
}

getcurrentweather('delhi');

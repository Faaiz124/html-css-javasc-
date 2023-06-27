const apiKey = '41e16b3e57274089fd6ae015054ba443';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const weather = {
  fetchWeather: async function (city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();
    // Update weather data on the page
    document.querySelector('.location1').innerHTML = data.name + ",";
    document.querySelector('.weather-temp').innerHTML = Math.round(data.main.temp) + " °C";
    document.querySelector('.weather-desc').innerHTML = data.weather[0].main;
    document.querySelector('.hunivel').innerHTML = data.main.humidity + " %";
    document.querySelector('.presval').innerHTML = Math.round(data.main.feels_like) + " °C";
    document.querySelector('.locationcount').innerHTML = data.sys.country ;
    document.querySelector('.windsp').innerHTML = data.wind.speed + " km/h";
  },
};

function weatherSearch() {
  const city = document.getElementById('search').value;
  weather.fetchWeather(city);
}

const year = moment(). year() 
document.getElementById("copyyear").innerHTML = year;



// date and time
const day = moment().format('dddd');

const date = moment('2016-01-01').add(365, 'day').format('LL')
  
document.querySelector('.date-day').innerHTML = date
document.querySelector('.date-dayname').innerHTML = day


feather.replace()
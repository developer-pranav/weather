const apiKey = "c0bd2b6b9877fb7e622b16a61e97a5f8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")



async function checkWeather(city) {
  const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
  const data = await response.json();


  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
  
  if(data.weather[0].main =="clouds"){
    weatherIcon.src = "images/clouds.png";
  }
  
  else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";
  }
  
  else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png";
  }
  
  else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  }

  else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "images/mist.png";
  }
  
}


searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

// Remove the following line if you don't want to automatically fetch weather on page load
checkWeather("Delhi");
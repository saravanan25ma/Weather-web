const apiKey = "af517f8eac06db3899b0a9a22b6801b7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWheather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "img/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "img/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "img/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "img/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "img/mist.png";
    }else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "img/snow.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

   
   
    // background change function
    modifybg(data);
  }
}

function modifybg(data) {
  if (data.weather[0].main === "Clouds") {
    document.querySelector(".card").style.background = "linear-gradient(135deg,  #acb9c4, #121215)";
  } else if (data.weather[0].main === "Clear") {
    document.querySelector(".card").style.background = "linear-gradient(135deg, #d2ffff, #0694c6)";
  } else if (data.weather[0].main === "Rain") {
    document.querySelector(".card").style.background = "linear-gradient(135deg,  #a1cdf9, #032851)";
  } else if (data.weather[0].main === "Drizzle") {
    document.querySelector(".card").style.background = "linear-gradient(135deg, #ffffff, #05203a)";
  } else if (data.weather[0].main === "Mist") {
    document.querySelector(".card").style.background = "linear-gradient(115deg, #ffffff, #00596b)";
  } else if (data.weather[0].main === "Snow") {
    document.querySelector(".card").style.background = "linear-gradient(330deg, #a0d7f4, #ffffff)";
  }
}

// Event listener for search button
searchBtn.addEventListener("click", () => {
  checkWheather(searchBox.value);
});

$(document).ready(function () {
  const apiKey = "5fe5fe3dcc3f5cd7f41568e8a32f8d34";
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
  
  const searchBox = document.querySelector(".search input");
  const searchBtn = document.getElementById("search-btn");
  
  async function checkWhether(city) {
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    
    if(response.status == 404) {
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
    }
    else {
      var data = await response.json();
      if (data){
        $(".weather").show();
      }
      
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = Math.round (data.main.temp) + " °C";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
      
      var weatherIcon = $(".weather-icon");
      weatherIcon.attr("src", "image/" + data.weather[0].icon + ".png");
      document.querySelector(".error").style.display = "none";
    }
  }

  searchBtn.addEventListener("click",()=>{
    if (searchBox.value == "") {
      alert("Please provide City name");
      return;
    }
    checkWhether(searchBox.value);
  })
});

//<script src="https://code.jquery.com/jquery-3.6.4.min.js" integrity="sha256-oP6HI9z1XaZNBrJURtCoUT5SUnxFr8s3BzRl+cbzUq8=" crossorigin="anonymous"></script>

const apiKey = "5fe5fe3dcc3f5cd7f41568e8a32f8d34";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWhether(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    
    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else 
    
    var data = await response.json();
    /*if (data){
        $(".weather").show();
    }*/
    
    
    document.querySelector(".city").innerHTML = data.name;
    //$(".city").html(data.name);
    
    //$('body').attr({ 'data-test': 'text' });
    //$(cname).attr({'src':})
    document.querySelector(".temp").innerHTML = Math.round (data.main.temp) + " °C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
    
    if(data.weather[0].main == "clouds"){
        weatherIcon.src = "image/03d@2x-scattered clouds.png";
    }
    
    else if(data.whether[0].main =="clear"){
        weatherIcon.src = "image/01d@2x-clear sky.png";   
    }
    
    else if(data.whether[0].main =="rain"){
        weatherIcon.src = "image/09d@2x-shower rain.png";   
    }
    else if(data.whether[0].main =="scatter"){
        weatherIcon.src = "image/03d@2x-scattered clouds.png";   
    }
    else if(data.whether[0].main =="mist"){
        weatherIcon.src = "image/50d@2x-mist.png";   
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "block";
    
}



searchBtn.addEventListener("click",()=>{
    checkWhether(searchBox.value);
})



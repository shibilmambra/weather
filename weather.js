	var date = new Date();
	var current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
	var current_time = date.getHours()+":"+date.getMinutes();
	var date_time = current_date+"     "+current_time;	
    
	document.getElementById("p1").innerHTML = date_time;

    fetch('https://api.openweathermap.org/data/2.5/weather?q=kochi&appid=8ac5c4d57ba6a4b3dfcf622700447b1e')
    .then(result => result.json())
    .then(cityWeather => display(cityWeather))
    
    
    
    
function weather(){
    let cityInput = input.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e`)
    .then(result=>result.json())
    .then(cityWeather=>display(cityWeather))
}

function display(cityWeather){
    if(cityWeather.cod !="200"){
        alert('wrong city name!!')
    }
    else{
        place.innerHTML = cityWeather.name
        temp.innerHTML = Math.floor((cityWeather.main.temp-273))+" "+"°C"
        description.innerHTML = cityWeather.weather[0].description
        // feelslike.innerHTML = Math.floor(cityWeather.main.feels_like-273)
        humidity.innerHTML = cityWeather.main.humidity
        pressure.innerHTML = cityWeather.main.pressure+" "+"Km/j"
        wind.innerHTML = cityWeather.wind.speed+" "+"Km/h"
        visibility.innerHTML = cityWeather.visibility
        country.innerHTML = cityWeather.sys.country
    }
}


   
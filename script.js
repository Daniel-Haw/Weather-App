let weather = {
    apiKey : "c8dfc3a186a44b7f8f582807231508",
    fetchWeather: function(city){
        fetch(
            "http://api.weatherapi.com/v1/current.json?key=" + this.apiKey + "&q=" + city +"&aqi=no"
        ).then((response) => response.json()).then((data) => this.displayWeather(data))
    },
    displayWeather: function(data){
        const { name } = data.location
        const { icon,text } = data.current.condition
        const { temp_c,wind_kph,humidity } = data.current
        console.log(name,icon,text,temp_c,wind_kph,humidity)
        document.querySelector(".weather-location").innerText = "Weather in " + name
        document.querySelector(".cloudiness").innerText = text
        document.querySelector(".temperature").innerText = temp_c + "°C"
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%"
        document.querySelector(".wind-speed").innerText= "Wind speed: " + wind_kph + "km/h"
        document.querySelector(".icon").src= icon
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value)
    }
}
document.querySelector(".search-button").addEventListener("click",function(){
    weather.search()
})
document.querySelector(".search-bar").addEventListener("keyup",function(event){
    if(event.key == "Enter"){
        weather.search()
    }
})

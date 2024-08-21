let cityName = document.getElementById("city-name");
let Temp = document.getElementById("temprature");
let Humidity = document.getElementById("humidity")
let Wind = document.getElementById("wind");
let Input = document.getElementById("input");
let weatherMain = document.getElementById("weather-main")
let Message = document.getElementById("message");
let weatherImg = document.getElementById("weather-image");
const apiKey = "cf7673216f1741ca7994d04e3a8c6f46";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const getWeather = async (city) => {
    let res = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (res.status === 404) {
        Message.innerHTML = "Sorry! city not found";
        Message.style.color = "red"
        setTimeout(() => {
            Message.innerHTML = "Type again the correct name of the city above to check the weather.";
        }, 3000);
        weatherMain.style.display = "none"
    }
    let data = await res.json()
    let weather = data.weather[0].main
    if (weather == "Clouds") {
        weatherImg.src = './images/clouds.png';
    } else if (weather == "Clear") {
        weatherImg.src = './images/clear.png';
    } else if (weather == "Drizzle") {
        weatherImg.src = './images/drizzle.png';
    } else if (weather == "Mist") {
        weatherImg.src = './images/mist.png';
    } else if (weather == "Rain") {
        weatherImg.src = './images/rain.png';
    } else if (weather == "Snow") {
        weatherImg.src = './images/snow.png';
    } else {
        weatherImg.src = './images/mist.png';
    }
    cityName.innerHTML = data.name
    Temp.innerHTML = Math.round(data.main.temp) + "℃"
    Humidity.innerHTML = `${data.main.humidity}%`
    Wind.innerHTML = data.wind.speed + " km/h";
    Input.value = ""
    Message.style.display = "none";
    weatherMain.style.display = "block"
}

function searchWeather() {
    if (Input.value == "") {
        alert("please enter city name")
    } else {
        getWeather(Input.value)
    }
}

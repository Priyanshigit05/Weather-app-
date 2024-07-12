
const apiKey="f71e569da5f86412bc940b4c479ef126";
const apiURL ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search=document.querySelector('.search input');
const searchBtn=document.querySelector('.search button');
const image=document.querySelector('#image');

async function checkWeather(city) {
    const response = await fetch(apiURL + city +`&appid=${apiKey}`);
    if (response.status!== 200) {
        document.querySelector('.info').style.display="none";
        document.querySelector('.error').style.display="block";
    }
    else{ 
    const data = await response.json();
    console.log(data);
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML =Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML =data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + "m/s";
    if (data.weather[0].main === "Clouds") {
        image.src="images/clouds.png";
}
else if (data.weather[0].main === "Rain") {
    image.src="images/rain.png";
}
    else if (data.weather[0].main === "Clear") {
        image.src="images/clear.png";
}
    else if (data.weather[0].main === "Snow") {
        image.src="images/snow.png";
}
    else if (data.weather[0].main === "Thunderstorm") {
        image.src="images/thunderstorm.png";
}
else if (data.weather[0].main === "Drizzle") {
    image.src="images/drizzle.png";
}
    else if (data.weather[0].main === "Mist") {
        image.src="images/mist.png";
}
    else if (data.weather[0].main === "Haze") {
        image.src="images/haze.png";
}
    else if (data.weather[0].main === "Smoke") {
        image.src="images/smoke.png";
}
    else if (data.weather[0].main === "Dust") {
        image.src="images/dust.png";
}
document.querySelector('.info').style.display="block";
document.querySelector('.error').style.display="none";
    }
}
searchBtn.addEventListener('click', () => {
    checkWeather(search.value);
})

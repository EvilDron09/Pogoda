

$(document).ready(function(){

    const cityInput = document.getElementById('cityInput');
    const formWeather = document.getElementById('formWeather');
    const divWeather = document.getElementById('divWeather');
    const apiKey = '6e9af9a332e87740a75a1a90655577e7';

    formWeather.addEventListener('click',() =>{
        const cityName = cityInput.value.trim();
        divWeather.innerText = '';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=ua&appid=${apiKey}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Помилка: ' + response.status);
            }

            return response.json();
        })
        .then(data => {
            console.log(data);
            const weatherCity = document.createElement('h3');
            weatherCity.innerText = `Місто: ${data.name}`;
            const weatherOnCity = document.createElement('p');
            weatherOnCity.innerText = `Температура: ${Math.round(data.main.temp)}°C,
            Відчувається: ${data.main.feels_like}°C,
            Вологість: ${data.main.humidity}%,
            Швидкість вітру: ${data.wind.speed}м/с`
            divWeather.append(weatherCity,weatherOnCity);
        })
        .catch(error => {
            console.error('Error:', error)
            divWeather.innerText = `${error.message}
            Місто не знайдене!`
        });
    });
    cityInput.addEventListener('keydown',(e) =>{
    if(e.key ==='Enter') formWeather.click()});
});

// 6e9af9a332e87740a75a1a90655577e7

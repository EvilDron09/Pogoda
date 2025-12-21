

$(document).ready(function(){
    alert('Jquery is ready');
});
fetch('https://api.openweathermap.org/data/2.5/weather?id={London}&appid={6e9af9a332e87740a75a1a90655577e7}')
    .then(response => response.json()) // Преобразуем ответ в JSON
    .then(data => console.log(data))
    .catch(error => console.error('Ошибка:', error));


async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "bd5e378503939ddaee76f12ad7a97608";
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await res.json();

    if (data.cod !== 200) {
        document.getElementById('result').innerHTML = "City Not Found!";
    } else {
        document.getElementById("result").innerHTML =
            `<h3>${data.name}</h3>
            <p>${data.weather[0].description}</p>
            <p>Temp: ${data.main.temp} °C</p>`;
    }
}

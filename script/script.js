const url = "https://api.openweathermap.org/data/2.5/weather?&lang=fr&appid=bdd659a388d07eba71c5da7d5459d42d&units=metric&q=";
let fetchResponse = null;

async function handleKeyPress(event) {
    if (event.key === 'Enter') {
        const nameCity = event.target.value;
        const urlCity = url + nameCity;
        fetchResponse = await fetch(urlCity);
        const body = await fetchResponse.json();
        if(body.cod === "404")
            return(displayError());
        return (displayWeather(body))
    }
}

function displayError()
{
    const container = document.querySelector(".container");
    const weatherBox = document.querySelector(".weatherBox");
    const weatherDetails = document.querySelector(".weatherDetails");
    container.classList.add("animation");
    const notFound = document.querySelector(".notFound");
    container.style.height = '400px';
    weatherBox.style.display = 'none';
    weatherDetails.style.display = 'none';
    notFound.style.display = "block";
}

function displayWeather(body)
{
    const {wind} = body;
    const {main} = body;
    const {weather} = body;
    const temperature = document.querySelector(".weatherBox");
    const weatherDetails = document.querySelector(".weatherDetails");
    const humidity = document.querySelector(".humidity span");
    const windSpeed = document.querySelector(".windSpeed span");
    const container = document.querySelector(".container");
    temperature.style.display = "block";
    weatherDetails.style.display = "flex";
    container.style.height = "560px";
    temperature.children[1].textContent = Math.round(main.temp) +" °C";
    temperature.children[2].textContent = weather[0].description.charAt(0).toUpperCase() + weather[0].description.slice(1);
    humidity.textContent = main.humidity + "%";
    windSpeed.textContent = wind.speed + "Km/h";
    displayMeteo(weather[0].description);
}

function displayMeteo(desc)
{
    const notFound = document.querySelector(".notFound");
    notFound.style.display = "none";
    notFound.classList.remove("animation");
    const container = document.querySelector(".container");
    container.classList.add("animation");
    let image = document.querySelector('.weatherBox img');
    switch (desc) {
        case "ciel dégagé":
            image.src = "images/clear.png";
            break;
        case "peu nuageux":
            image.src = "images/clear.png";
            break;
        case 'légère pluie':
            image.src = 'images/rain.png';
            break;
        case 'neige':
            image.src = 'images/snow.png';
            break;
        case 'nuageux':
            image.src = 'images/cloud.png';
            break;
        case 'couvert':
            image.src = 'images/cloud.png';
            break;
        case 'partiellement nuageux':
            image.src = 'images/haze.png';
            break;
    }
}


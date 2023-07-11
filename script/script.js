// const url = "https://api.openweathermap.org/data/2.5/weather?&lang=fr&appid=bdd659a388d07eba71c5da7d5459d42d&units=metric&q=";
// let fetchResponse = null;

// async function handleKeyPress(event) {
//     if (event.key === 'Enter') {
//         if(fetchResponse)
//             cleanDisplay()
//         const nameCity = event.target.value;
//         const urlCity = url + nameCity;
//         fetchResponse = await fetch(urlCity);
//         const body = await fetchResponse.json();
//         return await (displayWeather(body))
//     }
// }

// function displayWeather(body)
// {
//     const {wind} = body;
//     const {main} = body;
//     const {weather} = body;
//     const temperature = document.querySelector("#temp");
//     const humidity = document.querySelector("#humidity").firstElementChild;
//     const windSpeed = document.querySelector("#windSpeed").firstElementChild;
//     temperature.children[0].textContent += main.temp +" °C";
//     humidity.textContent += main.humidity +"%";
//     windSpeed.textContent += wind.speed + "Km/h";
//     let test = weather[0].description;
//     temperature.children[1].textContent += test.charAt(0).toUpperCase() + test.slice(1);
// }

// function cleanDisplay()
// {
//     const temperature = document.querySelector("#temp");
//     const humidity = document.querySelector("#humidity").firstElementChild;
//     const windSpeed = document.querySelector("#windSpeed").firstElementChild;
//     temperature.children[0].textContent = "Température : ";
//     humidity.textContent = "Humidité : ";
//     windSpeed.textContent = "Vitesse du vent : ";
//     temperature.children[1].textContent = "Météo : ";
// }


gsap.registerPlugin(Flip);

const fullSize = document.querySelector(".full-size"),
      thumbnail = document.querySelector(".thumbnail");


document.addEventListener("click", () => {
  const state = Flip.getState(".thumbnail, .full-size");

  fullSize.classList.toggle("active");
  thumbnail.classList.toggle("active");

  Flip.from(state, {
    duration: 0.6,
    fade: true,
    absolute: true,
    toggleClass: "flipping",
    ease: "power1.inOut"
  });
  
});

// pq ça marche pas ? ->
// console.log(weather[0].icon);
// const img = document.createElement("img");
// img.src = weather[0].icon;
// temperature.appendChild(img);
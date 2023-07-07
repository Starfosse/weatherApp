const url = "https://api.openweathermap.org/data/2.5/weather?q=&appid=bdd659a388d07eba71c5da7d5459d42d";
let fetchResponse = null;

async function handleKeyPress(event) {
    if (event.key === 'Enter') {
        const nameCity = event.target.value;
        let splitUrl = url.split("=")[0];
        splitUrl = splitUrl + "=" + nameCity;
        splitUrl = splitUrl + url.split("q=")[1];
        console.log(splitUrl);
        fetchResponse = await fetch(splitUrl);
        const body = await fetchResponse.json();
        const {wind} = body;
        const {coord} = body;
        console.log(wind.speed);
        console.log(coord.lat);
        // return (test(body));
        // const coord{} = body; 
    }
}

// function test(body)
// {
//     const {wind} = body;
//     console.log(wind.speed);
// }

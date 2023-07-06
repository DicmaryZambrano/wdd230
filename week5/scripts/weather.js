const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=a17be65d03f7c8ed2f5fee0a51f704c0"

function displayWeather(data) {
    const temp = data.main.temp; 
    const imgSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    const desc = data.weather[0].description;

    currentTemp.innerHTML = `${temp}&deg;F`;

    weatherIcon.setAttribute("src",imgSrc);
    weatherIcon.setAttribute("alt",`${desc} icon`);
    weatherIcon.setAttribute("width","1");
    weatherIcon.setAttribute("height","1");

    captionDesc.innerHTML = desc;
}

async function apiFetch(url) {
    try{
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayWeather(data)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch(url);
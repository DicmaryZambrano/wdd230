const figure = document.querySelector(".icon");
const currentTemp = document.getElementById("temp");
const weatherIcon = document.createElement("img");
const captionDesc = document.createElement("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=9.41&lon=-70.50&units=imperial&appid=a17be65d03f7c8ed2f5fee0a51f704c0"

function displayWeather(data) {
    const temp = data.main.temp; 
    const imgSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    const desc = data.weather[0].description;

    currentTemp.innerHTML = `${temp}&deg;F`;

    figure.appendChild(weatherIcon); 
    figure.appendChild(captionDesc); 

    weatherIcon.setAttribute("src",imgSrc);
    weatherIcon.setAttribute("alt",`${desc} icon`);
    weatherIcon.setAttribute("width","1");
    weatherIcon.setAttribute("height","1");

    captionDesc.textContent = desc;
    
}

async function apiFetch(url) {
    try{
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayWeather(data)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch(url);
apiFetch(url);
const veTemp = document.querySelector("#temp");
const weatherImg = document.querySelector("#weather-img");
const capDesc = document.querySelector("#desc");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=9.41&lon=-70.50&units=imperial&appid=a17be65d03f7c8ed2f5fee0a51f704c0"

function displayWeather(data) {
    const temp = data.main.temp; 
    const imgSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    const desc = data.weather[0].description;

    veTemp.innerHTML = `${temp}&deg;F`;

    weatherImg.setAttribute("src",imgSrc);
    weatherImg.setAttribute("alt",`${desc} icon`);
    weatherImg.setAttribute("width","1");
    weatherImg.setAttribute("height","1");
    weatherImg.setAttribute("loading","lazy");

    capDesc .innerHTML = desc;
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
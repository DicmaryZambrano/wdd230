const baseURL = "https://dicmaryzambrano.github.io/wdd230/";
const linksURL = "https://dicmaryzambrano.github.io/wdd230/data/links.json";
const linksList = document.getElementById("link-list");

function displayLinks(weeks){
    weeks.forEach(week => {
        const li = document.createElement("li");
        const title = document.createElement("p");
        
        title.textContent = `${week.week}: `;

        week.links.forEach(link => {
            const linkElem = document.createElement("a");
            const topicSpan = document.createElement("span");
            
            topicSpan.setAttribute("class","topic")

            linkElem.href = link.link;
            linkElem.textContent = link.title;

            title.appendChild(topicSpan);
            title.appendChild(linkElem);
        });
        
        li.appendChild(title);
        linksList.appendChild(li);
    });
}

async function apiFetch(linksURL) {
    try{
        const response = await fetch(linksURL);
        if (response.ok) {
            const data = await response.json();
            displayLinks(data.weeks);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch(linksURL);
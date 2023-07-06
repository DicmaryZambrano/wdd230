const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

function displayProphets(prophets) {
    prophets.forEach(prophet => {
        //build HTML
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let birth = document.createElement("p");
        let placeBirth = document.createElement("p");
        let portrait = document.createElement("img");

        fullName.innerText = `${prophet.name} ${prophet.lastname}`;
        
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute("alt",`${prophet.name} ${prophet.lastname}'s Portrait`)
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute("loading","lazy")
        portrait.setAttribute("width", "200");
        portrait.setAttribute("height", "300");

        birth.innerText = `Date of Birth: ${prophet.birthdate}`;
        placeBirth.innerText = `Place of Birth: ${prophet.birthplace}`

        card.appendChild(fullName);
        card.appendChild(birth);
        card.appendChild(placeBirth);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}

async function getProphets(url) {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        console.table(data);
        displayProphets(data.prophets);
    }
}

getProphets(url);
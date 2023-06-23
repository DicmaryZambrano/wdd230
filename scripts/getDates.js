

const oLastModif = new Date(document.lastModified);
const d = new Date();

let year = d.getFullYear();

document.querySelector("#year").innerHTML = year;
document.querySelector("#lastModified").innerHTML = `Last Modified: ${oLastModif}`;

let numVisits = getNumVisits() || 0;

if (numVisits !== 0) {
	document.querySelector("#visits").textContent = numVisits;
} else {
	document.querySelector("#visits").textContent = `Welcome to my page! this is your first visit`;
}

function getNumVisits() {
    return Number(localStorage.getItem("numVisits"))
}

numVisits++;

localStorage.setItem("numVisits", numVisits);
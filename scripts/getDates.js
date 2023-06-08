

const oLastModif = new Date(document.lastModified);
const d = new Date();

let year = d.getFullYear();

let docMonth = oLastModif.getMonth();
let docDay = oLastModif.getDate();
let docYear = oLastModif.getFullYear();

document.querySelector("#year").innerHTML = year;
document.querySelector("#lastModified").innerHTML = `Last Modified: ${docMonth}/${docDay}/${docYear}`;
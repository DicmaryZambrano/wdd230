const modeButton = document.querySelector("#mode");
const root = document.documentElement;

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("☑️")) {  /* --a-color: #47008e;
        --hover-color: #6E8387;;*/
        root.style.setProperty('--bg-color', "#12090F");
        root.style.setProperty('--white', "#12090F");
        root.style.setProperty('--text-color-p', "#fdfbf7");
        root.style.setProperty('--text-color-on-h', "#fdfbf7");
        root.style.setProperty('--a-color', "#6E838");
        root.style.setProperty('--hover-color', "#6E8387");
        modeButton.textContent = "❎";
    } else {
        root.style.setProperty('--white', "#fdfbf7");
        root.style.setProperty('--bg-color', "#FFF2DF")
        root.style.setProperty('--text-color-p', "#12090F");
        root.style.setProperty('--text-color-on-h', "#12090F");
        root.style.setProperty('--a-color', "#47008e");
        root.style.setProperty('--hover-color', "#6E838");
        modeButton.textContent = "☑️";
    }
});
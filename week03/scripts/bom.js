const input = document.querySelector("#favchap");
const ul = document.querySelector("#list");
const button = document.querySelector("button");

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

function displayList(chapter) {
    let value = chapter;

    let li = document.createElement("li");
    let span = document.createElement("span");
    let btn = document.createElement("button");

    span.innerText = value;
    btn.innerText = "❌";

    li.append(span);
    li.append(btn);

    ul.append(li);

    btn.addEventListener("click", () => {
        deleteChapter(chapter)
        Pop(li);
    });
}

function Add() {

    if (input.value !== '') {
        let value = input.value;
        chaptersArray.push(value);

        displayList(value)

        input.value = '';
        input.focus();

        setChapterList();
    }
    else {
        input.focus();
    }
}

function setChapterList() {
    localStorage.setItem('chapterArrayString', JSON.stringify(chaptersArray))
}

function Pop(li) {
    ul.removeChild(li);
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('chapterArrayString'))
}

function deleteChapter(chapter) {
    //chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}

button.addEventListener("click", Add);
const input = document.querySelector("#favchap");
const ul = document.querySelector("#list");
const button = document.querySelector("button");

function Add() {

    if (input.value !== '') {
        let value = input.value;
        input.value = '';

        let li = document.createElement("li");
        let span = document.createElement("span");
        let btn = document.createElement("button");

        span.innerText = value;
        btn.innerText = "❌";

        li.append(span);
        li.append(btn);

        ul.append(li)

        btn.addEventListener("click", () => {
            Pop(li)
        });

        input.focus();
    }
    else {
        input.focus();
        console.log("nope")
    }
}

function Pop(li) {
    ul.removeChild(li);
}

button.addEventListener("click", Add);
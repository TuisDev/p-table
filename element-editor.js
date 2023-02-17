const test = document.querySelector('#test');
const settings = document.querySelector('.settings');
let data;

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function drag(ev) {
    ev.dataTransfer.clearData();
    ev.dataTransfer.setData("text/plain", ev.target.id);
    ev.target.style.color = 'green';
}

settings.addEventListener('dragover', (event) => allowDrop(event));
settings.addEventListener('drop', (event) => drop(event));
test.addEventListener('dragstart', (event) => drag(event));
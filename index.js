let count = 0;
let counterEl = document.getElementById("counter-el");
let saveEl = document.getElementById("save-el");
function increament() {
    count += 1;
    counterEl.textContent = count;
}

function save() {
    saveEl.textContent += " - "+ count;
    count = -1;
    increament();
}
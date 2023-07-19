let countEl = document.getElementById("count-el");

let saveEl = document.getElementById("save-el");

let welcomeEl = document.getElementById("welcome-el");

let name = "Harriet";
let greeting = "Welcome ";

let welcomeMsg = greeting + name;

welcomeEl.textContent = welcomeMsg;

welcomeEl.textContent += " " + "😊";

let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

// save the count of passengers who have entered so far then reset the count to 0
function save() {
  let savedItem = count + " - ";
  saveEl.textContent += savedItem;
  count = 0;
  countEl.textContent = count;
}

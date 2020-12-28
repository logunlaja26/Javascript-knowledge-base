// store data in local storage
localStorage.setItem("name", "Mario");
localStorage.setItem("age", 50);

// get data from local storage
let name = localStorage.getItem("name");
let age = localStorage.getItem("age");

console.log(name, age);

// updating data
localStorage.setItem("name", "Luigi");
localStorage.age = 40;

name = localStorage.getItem("name");
age = localStorage.getItem("age");
console.log(name, age);

// deleting data from local storage
//ocalStorage.removeItem("name");
localStorage.clear();

name = localStorage.getItem("name");
age = localStorage.getItem("age");
console.log(name, age);

console.log("---------------------------");

const todos = [
  { text: "play mario", author: "Ly" },
  { text: "buy milk", author: "mario" },
  { text: "buy bread", author: "Luigi" },
];

console.log(JSON.stringify(todos));

localStorage.setItem("todos", JSON.stringify(todos));

const stored = localStorage.getItem("todos");

console.log(JSON.parse(stored));

// const para = document.querySelector("div.error");
// console.log(para);

//const { timeLog } = require("console");

//const { Console } = require("console");

// console.log("-----------------------------");
// // Manipulating dom by selector
// // Right click on the element in the page
// // copy by the selector
// // Insert selector element in the query
// const selector = document.querySelector("body > h1");
// console.log(selector);

// console.log("-----------------------------");
// // grabbing multiple elements
// const paras = document.querySelectorAll("p");
// paras.forEach((p) => {
//   console.log(p);
// });

// console.log("-----------------------------");
// // selecting multiple classes
// const errors = document.querySelectorAll(".error");
// console.log(errors);

// console.log("-----------------------------");
// // get an element by ID
// // each ID should be unique
// const title = document.getElementById("page-title");
// console.log(title);

// console.log("-----------------------------");
// // get elements by class name
// const errorsClassSelector = document.getElementsByClassName("error");
// console.log(errorsClassSelector);
// console.log(errorsClassSelector[0]);
// console.log(errorsClassSelector[1]);

// console.log("-----------------------------");
// // get elements by their tag name
// const tagName = document.getElementsByTagName("p");
// console.log(tagName);

// console.log("-----------------------------");
// const para1 = document.querySelector("p");
// //console.log(para1.innerText);
// //para1.innerText = "ninjas are awesome!";

// // console.log("-----------------------------");
// // // how to change text elements
// // const para2 = document.querySelectorAll("p");
// // paras.forEach((c) => {
// //   console.log(c.innerText);
// //   c.innerText += " new text";
// // });

// console.log("-----------------------------");
// // changing html content
// const content = document.querySelector(".content");
// //console.log(content.innerHTML);
// //content.innerHTML += "<H2>THIS IS A NEW H2</H2>";

// const people = ["mario", "luigi", "yoshi"];

// people.forEach((person) => {
//   content.innerHTML += `<p>${person}</p>`;
// });

const content = document.querySelector("p");

console.log(content.classList);
content.classList.add("error");
content.classList.remove("error");
content.classList.add("success");

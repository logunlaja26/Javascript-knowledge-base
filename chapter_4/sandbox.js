// function expression
const speak = function(){
    console.log('good day');
};
greet();
greet();
speak();

// function declaration
function greet(){
    console.log('hello there');

}

console.log("----------------------");
// arguments & parameters

const speakArg = function(name = 'Luigi', time = 'night'){
    console.log(`good ${time} ${name}`);
};

speakArg();


console.log("----------------------");
// returning values

const calcArea = function(radius){
    return 3.14 * radius**2;
     
};

const area = calcArea(5);
console.log(area);




console.log("----------------------");
// arrow function

const calcAreaArrowFunc = (radius) => {
    return 3.14 * radius**2;
};

const arrowArea = calcAreaArrowFunc(5);
console.log('area is: ',arrowArea);


const arrowGreet = () => 'hello, world';
console.log(arrowGreet());


const bill = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
};

console.log(bill([10,15,30],0.2));





console.log("----------------------");

const name = 'shaun';

// functions

const newGreet = () => 'hello';

let resultOne = newGreet();
console.log(resultOne);

// methods
/** methods are functions which are associated with an object or data type
that are defined on an object. Functions are defined on its on. **/
let resultTwo = name.toUpperCase();
console.log(resultTwo);






console.log("----------------------");
// callbacks 

const myFunc = (callbackFunc) => {
    // do something
    let value = 70;
    callbackFunc(value);
};

myFunc((value) => {
    // do something
    console.log(value);
});







// foreach - with callback function
let people = ['mario','luigi','ryu','shaun','chun-li'];

people.forEach(function(person){
    console.log(person);
});

console.log("--------------------------");
// convert top function to arrow function
people.forEach((person , index) => {
    console.log(index ,person);
});

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
};

people.forEach(logPerson);





console.log("--------------------------");
// get a reference to the 'ul'
const ul = document.querySelector('.myPeople');

let html = ``;

let myPeople = ['Ly','Ty','ryu','Bimmy','chun-li'];

people.forEach((person) => {
    // create html template 
    html += `<li style="color: purple">${person}</li>`;
})

console.log(html)
ul.innerHTML = html;
let age = 25;
let year = 2019;

console.log(age, year)

age = 30;
console.log(age);

//creates a variable but doesnt allow the value to be changed or overriden like var
const  point = 100;
//point = 50;
console.log(point);

// var is the older way to create variables
var score = 75;
console.log(score);



console.log("--------------------");
// strings
console.log('Hello, world');

let email = 'logunlaja26@gmail.com';
console.log(email);

// string concatenation
let firstName = 'Samuel';
let lastName = 'Jackson';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

// getting characters
console.log(fullName[0]);

// string length
console.log(fullName.length)


console.log("--------------------");
// string methods
// methods do not alter the original variable values
console.log(fullName.toUpperCase())
let result = fullName.toLowerCase();
console.log(result, fullName);

let index = email.indexOf('@');
console.log(index);

let emailResult = email.lastIndexOf('u');
console.log(emailResult);

let sliceEmail = email.slice(0,4);
console.log(sliceEmail);

let subResult = email.substr(3,5);
console.log(subResult);

let replaceResult = email.replace('m','w')
console.log(replaceResult);



console.log("--------------------");
// numbers data type
let radius = 10;
const pi = 3.14;
console.log(radius, pi);

// Nan - not a number
console.log(5 / 'hello');



console.log("--------------------");
// template strings 
const title = 'Best reads of 2020';
const author = 'Mario';
const likes  = 30

// concatenation way
let concatResult = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
console.log(concatResult);

// template string way
let temResult = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(temResult);

//creating html template
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes</span>
`; 

console.log(html);



console.log("--------------------");
// Arrays 
let ninjas = ['shawn','ryu','chun-li'];
console.log(ninjas);
console.log(ninjas[1]);
ninjas[1] = 'ken';
console.log(ninjas);
console.log(ninjas.length);

console.log("Array example 2");
let ages = [20,25,30,35];
console.log(ages[2]);

console.log("Array example 3");
let random = ['shaun','crystal',30,20];
console.log(random);


console.log("--------------------");
// Array methods
let methodResult = ninjas.join(' - ');
console.log(methodResult);

let indexResult = ninjas.indexOf('chun-li');
console.log(indexResult);

let concat = ninjas.concat(['Sam','Robbin']);
console.log(concat);

// Push & Pop is a destructive method, it alters the value of the variable
let pushResult = ninjas.push('Ty');
console.log(pushResult);
console.log(ninjas);

let popResult = ninjas.pop();
console.log(popResult);
console.log(ninjas);


console.log("--------------------");
// Null & Undefined

let undefinedAge = null;
console.log(undefinedAge,undefinedAge + 3,`the age is ${undefinedAge}`);


console.log("--------------------");
// boolean & comparisons
console.log(true, false)

// methods can return booleans 
let boolEmail = 'tysmith@gmail.com';
let names = ['mario','luigi','toad'];
let boolResult = email.includes('!');
let nameResult = names.includes('mario');
console.log(boolResult);
console.log(nameResult);

console.log("Comparison operators");
//comparison operators
let ageComp = 25;

console.log(ageComp == 25);
console.log(ageComp == 30);
console.log(ageComp != 25);
console.log(ageComp > 20);
console.log(ageComp <= 25);

let compName = 'shaun';
console.log(compName == 'shaun');
console.log(compName == 'Shaun');
console.log(name > 'crystal');
console.log(compName > 'Shaun');
console.log(compName > 'Crystal');


console.log("--------------------");
let newAge = 25;

// Loose comparison (different types can still be equal)
console.log(newAge == 25);
console.log(newAge == '25');
// Strict comparison(different types cannot be equal)
console.log(newAge === 25);
console.log(newAge === '25');
console.log(newAge !== 25);
console.log(newAge !== '25');


console.log("--------------------");
// type conversion
let scoreType = '100';

scoreType = Number(scoreType);
console.log(scoreType + 1);
console.log(typeof scoreType);

let numToString = String(50);
console.log(numToString, typeof numToString);

// Truthy - postive and minus numbers a considered truthy
// falsy - Zero is false

let booleanVar = Boolean(100);
console.log(booleanVar, typeof booleanVar);

let falsyVar = Boolean(0);
console.log(falsyVar, typeof falsyVar);

let truthyString = Boolean('0');
console.log(truthyString);

let falsyString = Boolean('');
console.log(falsyString);
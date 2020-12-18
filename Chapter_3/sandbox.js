// For loop
for(let i = 0; i < 5; i++){
    console.log('in loop',i);
}

console.log('loop finished');

const names = ['shawn','mario','luigi'];

for(let i = 0; i < names.length; i++){
    //console.log(i + " " + names[i]);
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}


// While loop
console.log("-------------------");

let i = 0;
while(i<5){
    console.log('in loop: ',i);
    i++;
}


const whileNames = ['shawn','mario','luigi'];
let x = 0;
while(x<whileNames.length){
    console.log(names[x]);
    x++;
}


// do while loops
console.log("-------------------");
let s = 5;
do{
    console.log('val of s is: ',s);
    s++;
} while(s < 5); 


console.log("-------------------");
// If Statements
const age = 25;
if (age > 20){
    console.log('you are over 20 years old');
}


const ninjas = ['shawn','mario','luigi','yoshi'];
if(ninjas.length > 3){
    console.log("that's a lot of ninjas");
}


const password = 'p@ssword';

if(password.length >= 8){
    console.log('that password is long enough!');
}


console.log("-------------------");
// else if statement

const newPassword = 'p@ssword1234';

if(newPassword.length >= 12){
    console.log('that password is might strong!');
} else if(newPassword.length >= 8){
    console.log('that password is long enough!');
} else {
    console.log('password is not long enough!');
}
 

console.log("-------------------");
// logical operators - OR || and AND &&

const conPassword = 'p@ss12';

if(conPassword.length >= 12 && conPassword.includes('@')){
    console.log('that password is might strong!');
} else if(conPassword.length >= 8 || conPassword.includes('@') && conPassword.length >= 5){
    console.log('that password is strong enough!');
} else {
    console.log('password is not long enough!');
}

console.log("-------------------");
// logical NOT (!)
let user = false; 
if(!user){
    console.log('you must be logged in to continue');
}



console.log("-------------------");
// break and continue 

const scores = [50,25,30,100,15,20,10];
for(let i = 0; i < scores.length; i++){
    console.log('your score: ',scores[i]);

    if(scores[i] === 100){
        console.log('congrats, you got the top score!');
        break; 
    }


}

console.log("-------------------");
// continue
const newScores = [50,25,0,100,15,20,10];
for(let i = 0; i < newScores.length; i++){

    if(newScores[i] === 0){
        continue; 
    }
    console.log('your score: ',newScores[i]);

    if(newScores[i] === 100){
        console.log('congrats, you got the top score!');
        break; 
    }
}

console.log("-------------------");
// switch statements
const grade = 'D';

switch(grade){
    case 'A':
        console.log('You got an A!');
        break;
    case 'B':
        console.log('You got an B!');
        break;
    case 'C':
        console.log('You got an C!');
        break;
    case 'D':
        console.log('You got an D!');
        break;
    case 'E':
        console.log('You got an E!');
        break;
    default:
        console.log('not a valid grade!')
}



console.log("-------------------");
//  Variables & block scope
// var - ignores the block scope role
let scopeAge = 30;


if(true){
    let scopeAge = 40;
    let name = 'Shawn';
    console.log('inside 1st code block: ',scopeAge, name);

    if(true){
        let scopeAge = 50;
        console.log('inside 2nd code block: ', scopeAge);
        var test = 'hello';
    }
}

console.log('outside code block: ',scopeAge , name, test);
// object literals

let user = {
  name: "crystal",
  age: 30,
  email: "crystal@ninja.co.uk",
  location: "berlin",
  blogs: [
    { title: "why mac & cheese rules", likes: 30 },
    { title: "10 things to make with marmite", likes: 50 },
  ],
  login: function () {
    console.log("the user logged in");
  },
  logout() {
    console.log("the user logged out");
  },
  logBlogs() {
    console.log("The user has written the following blogs: ");

    this.blogs.forEach((blog) => {
      console.log(blog.title, blog.likes);
    });
  },
};

console.log("-----------------");
console.log(user);
console.log(user.name);

console.log("-----------------");
user.age = 35;
console.log(user.age);

console.log("-----------------");
console.log(user["email"]);

user["name"] = "chun-li";
console.log(user["name"]);

console.log("-----------------");
console.log(typeof user);

// adding methods to objects
console.log("-----------------");
user.login();
user.logout();

console.log("-----------------");
user.logBlogs();

// Math object
console.log("-----------------");
console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.4;

console.log(Math.round(area)); // rounds based on .5
console.log(Math.floor(area)); // rounds to the lowest integer
console.log(Math.ceil(area)); // rounds to the highest integer
console.log(Math.trunc(area)); // displays the integer

// random numbers
console.log("------------------");
const random = Math.random();
console.log(random);
console.log(Math.round(random * 100));

//primitive values
console.log("-------------------");
let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

//reference values
console.log("------------------");
const userOne = { name: "ryu", age: 30 };
const userTwo = userOne;
console.log(userOne, userTwo);

userOne.name = "chun-li";
console.log(userOne, userTwo);

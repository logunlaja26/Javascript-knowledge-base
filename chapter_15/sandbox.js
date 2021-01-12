// A class is a blue print for an object
// A constructor function is what actually creates the object and set properties on it

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
    this.score = 0;
  }
  login() {
    console.log(`${this.username} just logged in`);
    return this;
  }
  logout() {
    console.log(`${this.username} just logged out`);
    return this;
  }
  incScore() {
    this.score += 1;
    console.log(`${this.username} has a sccore of ${this.score}`);
    return this;
  }
}

// This is a  javascript subclass
class Admin extends User {
  constructor(username, email, title) {
    super(username, email);
    this.title = title;
  }
  deleteUser(user) {
    users = users.filter((u) => {
      return u.username !== user.username;
    });
  }
}

const userOne = new User("Mario", "mario@gmail.com");
const userTwo = new User("Luigi", "luigi@gmail.com");
const userThree = new Admin("Ly", "lyomann@gmail.com", "black-belt-naija");
console.log(userOne, userTwo, userThree);

// the 'new' keyword
// 1 - it creates a new empty object {}
// 2 - it binds values of 'this' to the new empty object
// 3 - it calls the constructor function to 'build' the object

//method chaining
userOne.login().incScore().incScore().logout();
// userTwo.logout();
// userOne.incScore();

let users = [userOne, userTwo, userThree];
console.log(users);

userThree.deleteUser(userTwo);
console.log(users);

console.log(userThree);

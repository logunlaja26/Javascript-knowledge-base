// fetch api

// fetch("todos/luigi.json")
//   .then((response) => {
//     console.log("resolved", response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("rejected", err);
//   });

// async & await
// async functions start now and finishes later , lets javascript run the rest the code before code is executed
const getTodos = async () => {
  const response = await fetch("todos/mario.json");
  const data = await response.json();

  const response1 = await fetch("todos/luigi.json");
  const data1 = await response1.json();

  console.log(data);
  console.log(data1);

  return data;
};

// getTodos() function is non-blocking
console.log(1);
console.log(2);
console.log(3);
getTodos().then((data) => console.log("resolved:", data));
console.log(4);
console.log(5);

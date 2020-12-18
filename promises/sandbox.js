const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      //console.log(request, request.readyState);
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
        //console.log(request, request.responseText);
      } else if (request.readyState === 4) {
        reject("error getting resources");
        //console.log("could not fetch the data");
      }
    });

    //request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
    request.open("GET", resource);
    request.send();
  });
};

getTodos("todos/luigi.json")
  .then((data) => {
    console.log("promise 1 resolved; ", data);
    return getTodos("todos/mario.json");
  })
  .then((data) => {
    console.log("promise 2 resolved", data);
    return getTodos("todos/shaun.json");
  })
  .then((data) => {
    console.log("promise 3 resolved", data);
  })
  .catch((err) => {
    console.log("promise rejected:", err);
  });

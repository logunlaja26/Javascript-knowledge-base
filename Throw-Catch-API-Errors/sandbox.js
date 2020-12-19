// async & await
const getTodos = async () => {
  const response = await fetch("todos/marios.json");
  if (response.status !== 200) {
    throw new Error("cannot fetch the data");
  }

  const data = await response.json();

  const response1 = await fetch("todos/luigi.json");
  const data1 = await response1.json();

  //console.log(data);
  //console.log(data1);

  return data;
};

getTodos()
  .then((data) => console.log("resolved:", data))
  .catch((err) => console.log("rejected", err.message));

const list = document.querySelector("ul");
const form = document.querySelector("form");
const button = document.querySelector("button");

const addRecipe = (recipe, id) => {
  let time = recipe.created_at.toDate();
  let html = `
        <li data-id="${id}">
            <div>${recipe.title}</div>
            <div>${time}</div>
            <button class="btn btn-danger btn-sm my-2">delete</button>
        </li>
    `;
  list.innerHTML += html;
};

const deleteRecipe = (id) => {
  const recipes = document.querySelectorAll("li");
  recipes.forEach((recipe) => {
    if (recipe.getAttribute("data-id") === id) {
      recipe.remove();
    }
  });
};

// get documents
// db.collection("recipes")  -- one time listener to firestore database
//   .get()
//   .then((snapshot) => {
//     // when we have the data
//     snapshot.docs.forEach((doc) => {
//       //console.log(doc.id);
//       //console.log(doc.data());
//       addRecipe(doc.data(), doc.id);
//     });
//   })
//   .catch((error) => {
//     console.log(err);
//   });

const unsub = db.collection("recipes").onSnapshot((snapshot) => {
  snapshot.docChanges().forEach((change) => {
    const doc = change.doc;
    if (change.type === "added") {
      addRecipe(doc.data(), doc.id);
    } else if (change.type === "removed") {
      deleteRecipe(doc.id);
    }
  });
});

// add documents
form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(firebase.firestore());
  const now = new Date();
  const recipe = {
    title: form.recipe.value,
    created_at: firebase.firestore.Timestamp.fromDate(now),
  };

  db.collection("recipes")
    .add(recipe)
    .then(() => {
      console.log("recipe added");
    })
    .catch((err) => {
      console.log(err);
    });
});

// deleteting data -- deletes data from firestore database
list.addEventListener("click", (e) => {
  console.log(e);
  if (e.target.tagName === "BUTTON") {
    const id = e.target.parentElement.getAttribute("data-id");
    db.collection("recipes")
      .doc(id)
      .delete()
      .then(() => {
        console.log("recipes deleted");
      });
  }
});

// unsub from database changes
button.addEventListener("click", () => {
  unsub();
  console.log("unsubsccribed from collection changes");
});

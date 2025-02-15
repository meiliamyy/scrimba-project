import React from "react"

export default function Main() {

    const [ingredients, setIngredients] = React.useState([])

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))


export default function Form() {
  const ingredient = ["chicken", "oregano", "tomatoes"];

  const ingredientListItems = ingredient.map((ingredient) => {
    <li key={ingredient}>{ingredient}</li>;
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log("form submitted!");
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    ingredient.push(newIngredient);
    console.log(ingredient);
  }

  return (
    <main className="form-ingredient">
      <form onSubmit={handleSubmit}>
        <div className="textInputWrapper">
          <input placeholder="e.g. oregano" type="text" className="textInput" aria-label="Add ingredient" name="ingredient" />
        </div>
        <button>Add ingredient</button>
      </form>
      <ul>{ingredientListItems}</ul>
    </main>
  );
}

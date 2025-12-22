import { useFetch } from "./utils/useFetch";


const App = () => {


  const RecipeBook= []

  function extractIngredients(meal: any): Ingredient[] {
  const ingredients: Ingredient[] = [];

  for (let i = 1; i <= 20; i++) {
    const item = meal[`strIngredient${i}`];
    const quantity = meal[`strMeasure${i}`];

    if (item && item.trim()) {
      ingredients.push({
        item,
        quantity: quantity?.trim() || ""
      });
    }
  }

  return ingredients;
}
  
  for (let i = 1; i <= 10; i++) {
    const {data , loading ,error} = useFetch('https://www.themealdb.com/api/json/v1/1/random.php')
    const meal = data?.meals

    // console.log(meal[0].idMeal , meal[0].strMeal)


    RecipeBook.push({
      id: meal[0].idMeal,
      name: meal[0].strMeal,
      ingredients: extractIngredients(meal[0]),
      instructions: meal[0].strInstructions
        ?.split("\r\n")
        .filter(Boolean),
      categories: meal[0].strCategory,
      youtubeUrl: meal[0].strYoutube || undefined,
      sourceUrl: meal[0].strSource || undefined,
      thumbnailUrl: meal[0].strMealThumb || undefined
    })
  }

  console.log(RecipeBook)

  return (
    <div>
      App
      {RecipeBook.map(recipe => (
        <h1 key={recipe.id}>{recipe.name}</h1>
      ))}

    </div>
  );
}

export default App;

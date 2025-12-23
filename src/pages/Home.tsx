import { useCategories } from "../contexts/Categories/CategoriesContext";
import { useRecipeBook } from "../contexts/RecipeBook/RecipeBookContext";

const Home = () => {
    const {recipeBook , loading} = useRecipeBook()
    const {categories , catLoading} = useCategories()

    console.log(catLoading)
    console.log(categories)

    if(loading){
        return <div> loading</div>
    } 

    return (
        <div className="book-wall--wrapper">
            <div className="book-wall--row">
                <div className="filter-bar--wrapper">
                    <select name="" id="">
                        {catLoading && <option value="" selected>Loading...</option>}
                        {categories.map(category => (
                            <option value="">{category.name}</option>

                        ))}
                        
                    </select>
                </div>

                <div className="display-recipe--wrapper">
                    {recipeBook[0].name }
                </div>
                <div className="thubnail-recipe--wrapper">

                    {recipeBook.slice(1).map(recipe => (
                        <li key={recipe.id} >{recipe.name}</li>
                    ))}
                </div>
           
            </div>
        </div>
    );
}

export default Home;

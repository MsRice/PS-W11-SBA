import { useEffect, useMemo, useState} from "react";
import { useCategories } from "../contexts/Categories/CategoriesContext";
import { useRecipeBook } from "../contexts/RecipeBook/RecipeBookContext";
import type { Recipe } from "../types";

const Home = () => {
    const {recipeBook , loading} = useRecipeBook()
    const {categories , catLoading} = useCategories()
    
    
    const randomIndex = useMemo(() => {
        if (!recipeBook.length) return 0
        return Math.floor(Math.random() * recipeBook.length)
    }, [recipeBook])

    const randomRecipe = recipeBook[randomIndex] ?? null
    const [intID , setIntID] = useState<string | null>(null)
    
    const featureRecipe: Recipe | null = useMemo(() =>{
        if(!recipeBook.length) return null
        return(
            recipeBook.find(r => r.id === intID) ?? randomRecipe
        )
    },[recipeBook , intID , randomRecipe])


    if(loading){
        return <div> loading</div>
    } 
    
    


    return (
        <div className="book-wall--wrapper">
            <div className="book-wall--row">


                <div className="filter-bar--wrapper">
                    <select>
                        {catLoading && <option value="" selected>Loading...</option>}
                        {!catLoading && <option value="">All Categories</option>}
                        {categories.map(category => (
                            <option key={category.id} value={category.name}>{category.name}</option>

                        ))}
                        
                    </select>
                </div>

                <div className="feature-recipe--wrapper">
                    {featureRecipe && featureRecipe.name }
                </div>
                <div className="thubnail-recipe--wrapper">

                    {recipeBook.filter(recipe => recipe.id !== intID)
                    .map(recipe => (
                        <li key={recipe.id} >
                            <button onClick={() => setIntID(recipe.id)}>
                               {recipe.name} 
                            </button>
                        </li>
                    ))}
                </div>
           
            </div>
        </div>
    );
}

export default Home;

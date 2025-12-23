import { useEffect, useMemo, useState} from "react";
import { useCategories } from "../contexts/Categories/CategoriesContext";
import { useRecipeBook } from "../contexts/RecipeBook/RecipeBookContext";
import type { Recipe } from "../types";

const Home = () => {
    const {recipeBook , loading , category , setCategory}  = useRecipeBook()
    const {categories , catLoading} = useCategories()
    
    // Recipe Context probably, this looks super unclean
    
    const randomIndex = useMemo(() => {
        if (!recipeBook.length) return 0
        console.log(recipeBook)
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

    // --------------------------------------------------------------------- 

    // Filter Bar

    function handleFilterChange(currCategory: string){
      
        setCategory(currCategory)
    }

    // --------------------------------------------------------------------- 


    if(loading){
        return <div> loading</div>
    }   
    return (
        <div className="book-wall--wrapper">
            <div className="book-wall--row">


                <div className="filter-bar--wrapper">
                    <select defaultValue={category} onChange={e => handleFilterChange(e.currentTarget.value)}>
                        {catLoading && <option value="" selected>Loading...</option>}
                        {!catLoading && <option value="all">All Categories</option>}
                        {categories.map(cat => (
                            <option key={cat.id} value={cat.name}>{cat.name}</option>

                        ))}
                        
                    </select>
                </div>

                <div className="feature-recipe--wrapper">
                    {featureRecipe &&  
                    <div className="feature-card--wrapper">
                            <figure className="feature-image--wrapper">
                                <img className="feature-image--img" src={featureRecipe.thumbnailUrl} alt={`${featureRecipe.name} image`} />
                            </figure>
                            <h1>{featureRecipe.name}</h1>
                            <div className="feature-explore--wrapper">
                                <button>explore</button>
                            </div>
                    </div>}
                </div>
                <div className="thubnail-recipes--wrapper">

                        {recipeBook.filter(recipe => recipe.id !== intID)
                        .map(recipe => (
                            <div className="thubnail-recipe--wrapper" style={{backgroundImage: `url(${recipe.thumbnailUrl})`} }key={recipe.id} onClick={() => setIntID(recipe.id)} >
                                <p>
                                    {recipe.name} 
                                </p>
                                    
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default Home;

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecipe } from '../contexts/Recipe/RecipeContext';

const Recipe = () => {
    const {recipeId} = useParams<{ recipeId: string }>()
    const {recipe, loading, error, setRecipeId } = useRecipe()

    console.log(recipe)

    useEffect(() => {
        if (recipeId) {
        setRecipeId(recipeId);
        }
    }, [recipeId, setRecipeId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!recipe) return <p>No recipe found</p>;
    return (
        <div className="book-wall--wrapper">
            <div className="recipe-recipe--wrapper">
                
                {recipe &&  
                <div className="recipe-card--wrapper">
                        <div className='recipe-social--wrapper'>

                            <figure className="recipe-image--wrapper">
                                <img className="recipe-image--img" src={recipe.thumbnailUrl} alt={`${recipe.name} image`} />
                            </figure>

                            <div className='recipe-instruction--wrapper'>
                                <ul className='recipe-social--list'>
                                    {recipe.instructions?.map((i, index) => (
                                        <li  key={index}>{i}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className='recipe-social--wrapper'>
                            <h1>{recipe.name}</h1>
                            <h3>{recipe.category}</h3>
                             <ul>
                                {recipe.ingredients?.map((i, index) => (
                                    <li key={index}>{i.quantity} - {i.item}</li>
                                ))}
                            </ul>

                        </div>
                        
                        <div className="recipe-favorite--wrapper">
                            <button type="submit">Add to Favs</button>
                        </div>
                </div>}
            </div>

            
        </div>
    );
}

export default Recipe;

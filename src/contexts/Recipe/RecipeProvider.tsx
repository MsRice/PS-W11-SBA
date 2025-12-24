import { useEffect, useState } from 'react';
import type { Ingredient, Meal, Recipe, RecipeProviderProps } from '../../types';
import { RecipeContext } from './RecipeContext';

const RecipeProvider = ({children}:RecipeProviderProps) => {

    const [recipe , setRecipe] =useState<Recipe>()
    const [loading , setLoading] = useState(true)
    const [error , setError] = useState<string |null>(null)
    const [recipeId , setRecipeId] = useState<string |null>(null)

        const fetchRecipeById = async (recipeId : string) => {
            
            try {
                setLoading(true)
    
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`) 

                if(!response.ok){
                    throw new Error(`HTTP ${response.status}`)
                }
            
                const data = await response.json();
                
                console.log(data)
                const meal: Meal | undefined = data.meals?.[0];

                if (!meal) {
                    setRecipe(undefined);
                    return;
                }

                const mapped:Recipe = {
                            
                        id: meal.idMeal,
                        name: meal.strMeal,
                        ingredients: extractIngredients(meal) || undefined,
                        instructions: meal.strInstructions
                        ?.split("\r\n")
                        .filter(Boolean),
                        category: meal.strCategory || undefined,
                        youtubeUrl: meal.strYoutube || undefined,
                        sourceUrl: meal.strSource || undefined,
                        thumbnailUrl: meal.strMealThumb || undefined
                }
                
                console.log(mapped)
            
                setRecipe(mapped)
                setError(null)
                
            } catch {
                setError("ERROR MSG: Recipe book did'nt fetch")
                
            } finally{
                setLoading(false)
            }
        }

        function extractIngredients(meal: Meal): Ingredient[] {
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

        useEffect(() => {
            if(recipeId){
                fetchRecipeById(recipeId)
            }
        },[recipeId])

    return (
        <RecipeContext.Provider value={{recipe , loading , error , recipeId , setRecipeId}}>
            {children}
        </RecipeContext.Provider>
    );
}

export default RecipeProvider;

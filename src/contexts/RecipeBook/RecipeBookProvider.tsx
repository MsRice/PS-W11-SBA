import React, { useEffect, useState } from 'react';
import type { Recipe, RecipeBookProviderProps , Ingredient, Meal} from '../../types';
import { RecipeBookContext } from './RecipeBookContext';

export default function RecipeBookProvider({children}:RecipeBookProviderProps) {

    const [recipeBook , setRecipeBook] =useState<Recipe[]>([])
    const [loading , setLoading] = useState(true)
    const [error , setError] = useState<string |null>(null)

    const fetchRecipes = async () => {
        try {
            setLoading(true)

            const requests = Array.from({length: 10}, () =>
                fetch('https://www.themealdb.com/api/json/v1/1/random.php' ).then(el => el.json())
            )
            const responses = await Promise.all(requests)
            const mapped:Recipe[] = responses.map(res => {
                const meal = res.meals[0]

                return{
                    id: meal.idMeal,
                    name: meal.strMeal,
                    ingredients: extractIngredients(meal),
                    instructions: meal.strInstructions
                        ?.split("\r\n")
                        .filter(Boolean),
                    category: meal.strCategory || undefined,
                    youtubeUrl: meal.strYoutube || undefined,
                    sourceUrl: meal.strSource || undefined,
                    thumbnailUrl: meal.strMealThumb || undefined
                }
            })
            setRecipeBook(mapped)
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

    useEffect(()=>{
        fetchRecipes()
    },[])
    return (
        <RecipeBookContext.Provider value={{recipeBook ,loading ,error}}>
            {children}
        </RecipeBookContext.Provider>
    );
}


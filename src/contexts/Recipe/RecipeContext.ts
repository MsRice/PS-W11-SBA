import { createContext, useContext } from "react";
import type { RecipeContextType } from "../../types";

export const RecipeContext = createContext<RecipeContextType | undefined>(undefined)

export function useRecipe(){
    const context = useContext(RecipeContext)

    if(!context){
        throw new Error("useRecipes must be used within RecipeProvider")
    }
    return context
}
import { createContext, useContext } from "react";
import type { RecipeBookContextType } from "../../types";

export const RecipeBookContext = createContext<RecipeBookContextType | undefined>(undefined)

export function useRecipeBook(){
    const context = useContext(RecipeBookContext)

    if(!context){
        throw new Error("useRecipes must be used within RecipeProvider")
    }
    return context
}
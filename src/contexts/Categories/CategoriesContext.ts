import { createContext, useContext } from "react";
import type { CategoriesContextType } from "../../types";

export const CategoriesContext = createContext<CategoriesContextType | undefined>(undefined)
   
export function useCategories(){
    const context = useContext(CategoriesContext)

    if(!context){
        throw new Error("useRecipes must be used within CategoriesProvider")
    }
    return context
}
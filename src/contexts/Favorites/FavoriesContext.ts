import { createContext, useContext } from "react";
import type { FavoritesContextType } from "../../types";

export const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined)

export function useFavorites(){
    const context = useContext(FavoritesContext)

    if(!context){
        throw new Error( 'useFavorites must be used within an FavoritesProvider')
    }

    return context
}
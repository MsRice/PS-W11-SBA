import { useEffect, useState } from 'react';
import { FavoritesContext } from './FavoriesContext';
import type { Favorite, FavoritesProviderProps } from '../../types';
import { useAuthentication } from '../auth/AuthenticationContect';

const FavoritesProvider = ({children}:FavoritesProviderProps) => {

    const [favoritesList , setFavoritesList] = useState<Favorite[]>([])
    const { user } = useAuthentication()
    
    const storageKey = user ? `${user.username}_favorites`: null
    
    useEffect(() =>{
        if(!storageKey){
            setFavoritesList(prev => (prev.length ? [] : prev))
            return   
        }


        const stored:string| null = localStorage.getItem(storageKey);

        setFavoritesList(stored ? JSON.parse(stored) : []);

    }, [storageKey, user]);




    const addToFavorites = (favorite: Favorite) =>{
        console.log(favorite ,storageKey)

        if(!storageKey) return

        setFavoritesList(prev => {
            console.log(prev)
            if(prev.some(f => f.recipeId === favorite.recipeId)){
                return prev
            }
            
            const updated = [...prev , favorite]
            localStorage.setItem(storageKey , JSON.stringify(updated))
            return updated   
        })
    }

    return (
        <FavoritesContext.Provider value={{favoritesList , addToFavorites}}>
            {children}
        </FavoritesContext.Provider>
    );
}

export default FavoritesProvider;

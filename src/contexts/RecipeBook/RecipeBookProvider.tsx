import React from 'react';
import type { RecipeBookProviderProps } from '../../types';
import { RecipeBookContext } from './RecipeBookContext';

export default function RecipeBookProvider({children}:RecipeBookProviderProps) {
    return (
        <RecipeBookContext.Provider value={{recipes}}>
            
        </RecipeBookContext.Provider>
    );
}


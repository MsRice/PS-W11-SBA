import React, { useEffect, useState } from 'react';
import type { CategoriesProviderProps, Category } from '../../types';
import { CategoriesContext } from './CategoriesContext';

export default function CategoriesProvider({children}:CategoriesProviderProps) {

    const [categories , setCategories] =useState<Category[]>([])
    const [catLoading , setCatLoading] = useState(true)
    const [catError , setCatError] = useState<string |null>(null)
    
    const fetchCategories = async() => {
        try {
            setCatLoading(true)
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php') 

            if(!response.ok){
                throw new Error(`HTTP ${response.status}`)
            }

            const data = await response.json();
            
            const mapper:Category[] = data.categories.map((res:any )=>({
                    id: res.idCategory,
                    name: res.strCategory,
                    thumbUrl: res.strCategoryThumb,
                    description: res.strCategoryDescription
            
                }))

            setCategories(mapper)
            setCatError(null)

        } catch (error) {
            setCatError((error as Error).message)
            
        }finally{
            setCatLoading(false)
        }
    }
    useEffect(()=>{
        fetchCategories()
    },[])
    
    return (
        <CategoriesContext.Provider value={{
            categories , catLoading , catError
        }} >
            {children}
            
        </CategoriesContext.Provider>
    );
}



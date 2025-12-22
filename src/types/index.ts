export interface Recipe{
    id:string
    name: string
    ingredients?: Ingredient[]
    instructions?: string[]
    category?: string
    youtubeUrl?: string
    sourceUrl?: string
    thumbnailUrl?: string

}

export interface Ingredient {
    quantity: string
    item: string
}

export interface RecipeBookContextType {
    recipeBook: Recipe[] 
    loading : boolean
    error : string | null
}

export interface RecipeBookProviderProps {
  children: React.ReactNode
}
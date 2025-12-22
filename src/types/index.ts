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

interface Ingredient {
    quanity: string
    item: string
}

export interface RecipeBookContextType {
    recipes: Recipe[] 
}

export interface RecipeBookProviderProps {
  children: React.ReactNode
}
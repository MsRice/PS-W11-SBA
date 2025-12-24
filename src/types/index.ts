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
export interface Meal {
  [key: `strIngredient${number}`]: string | null;
  [key: `strMeasure${number}`]: string | null;
}
export interface RecipeBookContextType {
    recipeBook: Recipe[] 
    loading : boolean
    error : string | null
    category : string
    setCategory : (category: string) => void
}
export interface RecipeContextType {
    recipe: Recipe | undefined
    loading : boolean
    error : string | null
    recipeId: Recipe['id'] | null
    setRecipeId: (id: string) => void
}

export interface RecipeBookProviderProps {
  children: React.ReactNode
}
export interface RecipeProviderProps {
  children: React.ReactNode
}

export type SourceType = 'login' | 'logout' | 'favorites' ;

export type ModalContextType = {
  isOpen: boolean;
  source: SourceType | null;
  openModal: (source : SourceType) => void;
  closeModal: () => void;
}

export interface ModalProviderProps {
    children: React.ReactNode
  }


export interface User {
    id: number,
    username: string,
    password: string,
}

export interface AuthContextType {
    user : User | undefined,
    login: (userData: User) => void,
    logout: () => void
}

export interface AuthenticationProviderProps {
  children: React.ReactNode
}

export interface Category {
  id: string
  name: string
  thumbUrl: string
  description: string
}

export interface CategoriesContextType {
    categories: Category[] 
    catLoading : boolean
    catError : string | null
}

export interface CategoriesProviderProps {
  children: React.ReactNode
}

export interface Favorite{
  recipeId: Recipe['id'] | undefined
  name: Recipe['name'] | undefined
}

export interface FavoritesContextType {
  favoritesList: Favorite[]
  addToFavorites: (favorite: Favorite) => void,
}

export interface FavoritesProviderProps {
  children: React.ReactNode
}
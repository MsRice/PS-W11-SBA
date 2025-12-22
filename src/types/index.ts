export interface Recipe{
    id:string
    name: string
    ingredients?: Ingredient[]
    instructions?: string[]
    categories?: string[]
    youtubeUrl?: string
    sourceUrl?: string
    thumbnailUrl?: string

}

interface Ingredient {
    quanity: string
    item: string
}
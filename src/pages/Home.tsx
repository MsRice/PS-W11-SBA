import { useRecipeBook } from "../contexts/RecipeBook/RecipeBookContext";

const Home = () => {
    const {recipeBook , loading} = useRecipeBook()

    if(loading){
        return <div> loading</div>
    } 

    return (
        <div>
            Home is where the heart is
        </div>
    );
}

export default Home;

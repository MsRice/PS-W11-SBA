import { Route, Routes, useParams } from "react-router-dom";
import Home from "./pages/Home";
import HomeLayout from "./pages/HomeLayout";
import Recipe from "./pages/Recipe";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout/>}>

        <Route index element={<Home />}/>
        <Route path="recipe/:recipeId" element={<Recipe />}/>
     
      </Route>
    </Routes>
  );
}

export default App;

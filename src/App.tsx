import { useFetch } from "./utils/useFetch";


const App = () => {

// const { data, loading, error } = useFetch('www.themealdb.com/api/json/v1/1/random.php');
const { data, loading, error } = useFetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Errorhere: {error}</p>;
  console.log('nt')
  console.log(data)
  return (
    <div>
      App

    </div>
  );
}

export default App;

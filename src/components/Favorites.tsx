import { useAuthentication } from '../contexts/auth/AuthenticationContect';
import { useFavorites } from '../contexts/Favorites/FavoriesContext';
import { FaRegTrashCan } from "react-icons/fa6";

const Favorites = () => {
    const {user} = useAuthentication()
    const { favoritesList , removeFromFavorites} = useFavorites()

    console.log(favoritesList)
    if(!user){
        return(
            <div className="favorites--wrapper">
                <h1 className='fav-unlogged'>Log in to save to your , Favorites!</h1>
            
            </div>
        )
    }
    return (
        <div className="favorites--wrapper">
            <div className='favorites__title'>{user?.username} , Favorites!</div>
            <ul className='favorites__list--wrapper'>
                {favoritesList.map(fav =>(
                    <li className='favorites__list--item'>{fav.name} <button className='favorite-delete--btn' onClick={() => removeFromFavorites(fav)}><FaRegTrashCan /></button></li>
                ))}
            </ul>
            

            

        </div>
    );
}

export default Favorites;

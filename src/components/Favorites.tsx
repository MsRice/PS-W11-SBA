import { useAuthentication } from '../contexts/auth/AuthenticationContect';
import { useFavorites } from '../contexts/Favorites/FavoriesContext';

const Favorites = () => {
    const {user} = useAuthentication()
    const { favoritesList } = useFavorites()

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
                    <li>{fav.name}</li>
                ))}
            </ul>
            

            

        </div>
    );
}

export default Favorites;

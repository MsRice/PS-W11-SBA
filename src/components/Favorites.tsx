import { useAuthentication } from '../contexts/auth/AuthenticationContect';

const Favorites = () => {
    const {user} = useAuthentication()
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

            </ul>
            

            

        </div>
    );
}

export default Favorites;

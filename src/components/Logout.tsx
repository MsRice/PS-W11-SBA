import { useAuthentication } from '../contexts/auth/AuthenticationContect';

const Logout = () => {

    const {user , logout} = useAuthentication()

    return (
        <div className='logout--wrapper'>
            <div className="current-user--wrapper">
                <h1>Hi, {user?.username}</h1>
            <button onClick={() => logout()}>Log Out</button>
            </div>
        </div>
    );
}

export default Logout;

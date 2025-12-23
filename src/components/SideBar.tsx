import { useModal } from '../contexts/modal/ModalContext';
import { RxCross2 } from "react-icons/rx";
import Login from './Login';
import Logout from './Logout';
import Favorites from './Favorites';
import { useAuthentication } from '../contexts/auth/AuthenticationContect';

const SideBar = () => {
    const {isOpen , source ,closeModal}  = useModal()
    const {user} = useAuthentication()
    return (
        <div className={`sidebar--wrapper sidebar-${isOpen}`}>
            <RxCross2 className='exit-btn' onClick={closeModal}/>
            {source === 'login' && !user && <Login />}
            {source === 'login' && user && <Logout />}
            {source === 'favorites' && <Favorites />}
        </div>
    );
}

export default SideBar;

import { useModal } from '../contexts/modal/ModalContext';
import { RxCross2 } from "react-icons/rx";

const SideBar = () => {
    const {isOpen , source ,closeModal}  = useModal()
    return (
        <div className={`sidebar--wrapper sidebar-${isOpen}`}>
            <RxCross2 className='exit-btn' onClick={closeModal}/>
            <h1>

            Side bar , {source}
            </h1>
        </div>
    );
}

export default SideBar;

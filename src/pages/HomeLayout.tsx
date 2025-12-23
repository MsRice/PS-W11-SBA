import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { useModal } from '../contexts/modal/ModalContext';
import SideBar from '../components/SideBar';

const HomeLayout = () => {
     const {isOpen} = useModal()
    return (
        <div className='container'>
            <div className={`row row-modal-${isOpen}`}>
                <div className='main'>

                <Nav />
                <Outlet />
                </div>
                <Footer />
            </div>
            { isOpen && <SideBar />}
        </div>
    );
}

export default HomeLayout;

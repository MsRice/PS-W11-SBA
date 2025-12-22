import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const HomeLayout = () => {
    return (
        <div className='container'>
            <Nav />
            <Outlet />
            <Footer />
        </div>
    );
}

export default HomeLayout;

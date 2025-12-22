import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';

const HomeLayout = () => {
    return (
        <div>
            <Nav />
            <Outlet />
            <div>Footer</div>
        </div>
    );
}

export default HomeLayout;

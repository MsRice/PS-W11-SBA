import React from 'react';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div>
            <div>Nav</div>
            <Outlet />
            <div>Footer</div>
        </div>
    );
}

export default HomeLayout;

import React from 'react';
import ricebook from '../assets/RiceBookLogos/ricebook.png'
import { BiSolidUserDetail } from 'react-icons/bi';

const Nav = () => {
    return (
        <div className="nav--wrapper">
            <figure className='nav__logo--wrapper'>
                <img src={ricebook} alt="RiceBook Logo" />
            </figure>
            <ul className="nav--links">
                <li className="nav--link">Home</li>
                <li className="nav--link">Favorites</li>
                <li className="nav--link account"><BiSolidUserDetail /></li>
            </ul>
        </div>
    );
}

export default Nav;

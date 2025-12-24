import React from 'react';
import ricebook from '../assets/RiceBookLogos/ricebook.png'
import { BiSolidUserDetail } from 'react-icons/bi';
import { useModal } from '../contexts/modal/ModalContext';
import type { SourceType } from '../types';
import { Link } from 'react-router-dom';

const Nav = () => {
    const {openModal ,isOpen} = useModal()

    function handleModalOpen(source:SourceType){
        console.log(source , isOpen)
        openModal(source)
    }

    return (
        <div className="nav--wrapper">
            <figure className='nav__logo--wrapper'>
                <img src={ricebook} alt="RiceBook Logo" />
            </figure>
            <ul className="nav--links">
                <li className="nav--link"><Link to=''>Home</Link></li>
                <li className="nav--link" onClick={() => handleModalOpen('favorites')}>Favorites</li>
                <li className="nav--link account" onClick={() => handleModalOpen('login')}><BiSolidUserDetail /></li>
            </ul>
        </div>
    );
}

export default Nav;

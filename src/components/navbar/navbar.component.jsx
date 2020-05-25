import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.style.scss';
import { ReactComponent as Logo } from '../../assets/original.svg';

const Navbar = () => (
    <div className='navbar'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
        </div>
    </div>
)

export default Navbar;
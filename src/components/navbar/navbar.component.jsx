import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.style.scss';
import { ReactComponent as Logo } from '../../assets/original.svg';

import {auth} from '../../firebase/firebase.utils';

const Navbar = ({currentUser}) => (
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
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
        </div>
    </div>
)

export default Navbar;
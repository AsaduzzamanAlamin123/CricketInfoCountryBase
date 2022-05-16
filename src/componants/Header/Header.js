import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../image/images-removebg-preview.png'

const Header = () => {
    return (
        <div>
            <h2>this is header</h2>
        <div className='header-container'>
            <div className='logo-container'>
                <img src={Logo} alt="" />

            </div>
            <div className='menu-container'>
                <Link to='/'>Home</Link>
                <Link to='/'>Cricket Team</Link>
                <Link to='/'>Legend Player</Link>
                <Link to='/'>ABout </Link>
                <Link to='/'>contact</Link>

            </div>

        </div>
        </div>
    );
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../image/images-removebg-preview.png'
import './Heder.css';

const Header = () => {
    return (
        <div>
           
        <div className='header-container'>
            <div className='logo-container'>
                <img src={Logo} alt="" />

            </div>
            <div className='menu-container'>
                <Link to='/'>Home</Link>
                <Link to='/cricketteam'>Cricket Team</Link>
                <Link to='/legendplayer'>Legend Player</Link>
                <Link to='/about'>ABout </Link>
                <Link to='/'>contact</Link>

            </div>
            

        </div>
        </div>
    );
};

export default Header;
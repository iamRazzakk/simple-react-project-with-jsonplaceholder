import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'contact'}>Contact</Link>
            <Link to={'footer'}>Footer</Link>
            <Link to={'users'}>User</Link>
            <Link to={'/posts'}>Post</Link>
        </nav>
    );
};

export default Header;
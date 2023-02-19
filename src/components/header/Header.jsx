import React from 'react';
import logo from '../../img/logo.png'
import HeaderNavbar from "./HeaderNavbar";
import HeaderTools from "./HeaderTools";
import HeaderProfile from "./HeaderProfile";
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <header className='header'>
            <div className='header__container'>
                <Link to="" className="header__logo__container">
                    <img src={logo} alt="logo" className="header__logo"/>
                </Link>
                <HeaderNavbar/>
                <HeaderTools/>
                <HeaderProfile/>
            </div>
        </header>
    );
};

export default Header;
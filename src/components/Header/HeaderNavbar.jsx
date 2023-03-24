import React from 'react';
import {Link} from "react-router-dom";

const HeaderNavbar = () => {
    return (
        <nav className="header__menu__container">
            <ul className="header__menu">
                <li className="header__menu__item">
                    <Link to="/catalog">Каталог</Link>
                </li>
                <li className="header__menu__item">
                    <Link to="/support">Поддержка</Link>
                </li>
            </ul>
        </nav>
    );
};

export default HeaderNavbar;
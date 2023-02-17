import React from 'react';
import logo from '../img/logo.png'
import imgCard from '../img/utitlity-card.svg'
import imgPluse from '../img/utitlity-pluse.svg'
import imgShare from '../img/utitlity-share.svg'
import imgTheme from '../img/utitlity-theme.svg'
import imgLogin from '../img/login.svg'
import imgProfile from '../img/profile.svg'
import {Link, useNavigate} from 'react-router-dom';
const Header = () => {
    return (
        <header className='header'>
            <div className='header__container'>
                <div className="header__logo__container">
                    <img src={logo} alt="logo" className="header__logo"/>
                </div>
                <div className="header__menu__container">
                    <ul className="header__menu">
                        <li className="header__menu__item">
                            <Link to="/catalog">Каталог</Link>
                        </li>
                        <li className="header__menu__item">
                            <Link to="/support">Поддержка</Link>
                        </li>
                        <li className="header__menu__item">
                            <Link to="/messages">Отзывы</Link>
                        </li>
                    </ul>
                </div>
                <div className="header__tools">
                    <div className="header__tools__price__container">
                        <div className="header__tools__price__title">
                            Баланс
                        </div>
                        <div className="header__tools__price__value">
                            0.00
                        </div>
                    </div>
                    <div className="header__tools__utilities">
                        <div className="header__tools__utility">
                            <img src={imgPluse} alt="img" className="header__tools__utility__img"/>
                        </div>
                        <div className="header__tools__utility">
                            <img src={imgCard} alt="img" className="header__tools__utility__img"/>
                        </div>
                        <div className="header__tools__utility">
                            <img src={imgTheme} alt="img" className="header__tools__utility__img"/>
                        </div>
                        <div className="header__tools__utility">
                            <img src={imgShare} alt="img" className="header__tools__utility__img"/>
                        </div>
                    </div>
                </div>
                <div className="header__profile">
                    <div className="header__profile__login">
                        <img src={imgLogin} alt="login" className="header__profile__login__img"/>
                        <span className="header__profile__login__title">Вход/Регистрация</span>
                    </div>
                    <div className="header__profile__link">
                        <img src={imgProfile} alt="profile" className="header__profile__link__img"/>
                        <span className="header__profile__link__title">Кабинет</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
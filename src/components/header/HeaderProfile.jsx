import React from 'react';
import imgLogin from "../../img/login.svg";
import imgProfile from "../../img/profile.svg";

const HeaderProfile = () => {
    return (
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
    );
};

export default HeaderProfile;
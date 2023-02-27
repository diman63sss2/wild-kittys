import React, {useState} from 'react';
import imgLogin from "../../img/login.svg";
import imgProfile from "../../img/profile.svg";
import ModalBase from "../UI/Modal/ModalBase";
import LoginForm from "../Forms/LoginForm/LoginForm";

const HeaderProfile = ({dataUser, setDataUser}) => {
    const [loginVisible, setLoginVisible] = useState(false);

    return (
        <div className="header__profile">
            {
                dataUser.authorize ?
                    <div className="header__profile__link">
                        <img src={imgProfile} alt="profile" className="header__profile__link__img"/>
                        <span className="header__profile__link__title">Кабинет</span>
                    </div>
                    :
                    <div>
                        <ModalBase visible={loginVisible} setVisible={setLoginVisible}>
                            <LoginForm dataUser={dataUser} setDataUser={setDataUser}/>
                        </ModalBase>
                        <div className="header__profile__login" onClick={()=>setLoginVisible(true)}>
                            <img src={imgLogin} alt="login" className="header__profile__login__img"/>
                            <span className="header__profile__login__title">Вход/Регистрация</span>
                        </div>
                    </div>
            }
        </div>
    );
};

export default HeaderProfile;
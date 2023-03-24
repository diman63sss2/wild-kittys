import React, {useContext} from 'react';
import logo from '../../img/logo.png'
import HeaderNavbar from "./HeaderNavbar";
import HeaderTools from "./HeaderTools";
import HeaderProfile from "./HeaderProfile";
import {Link} from "react-router-dom";
import {AuthContext} from "../../context";
import {observer} from "mobx-react-lite";
const Header = observer(() => {
    const {user} = useContext(AuthContext);

    const LogAut = () => {
        user.setIsAuth(false);
        user.setUser({});
        localStorage.removeItem('token')
        localStorage.removeItem('refreshToken')
    }

    return (
        <header className='header'>
            <div className='header__container'>
                <Link to="/" className="header__logo__container">
                    <img src={logo} alt="logo" className="header__logo"/>
                </Link>
                <HeaderNavbar/>
                <HeaderTools userAuth={user.isAuth}/>
                <HeaderProfile userAuth={user.isAuth}/>
                {
                    user.isAuth &&
                    <button onClick={()=>LogAut()}>
                        log out
                    </button>
                }

            </div>
        </header>
    );
});

export default Header;
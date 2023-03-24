import React, {useContext, useState} from 'react';
import cl from "./LoginForm.module.css";
import InputForm from "../../UI/InputForm/InputForm";
import ButtonForm from "../../UI/ButtonForm/ButtonForm";
import {AuthContext} from "../../../context";
import {login} from "../../../http/userAPI";
import {observer} from "mobx-react-lite";

const LoginForm = observer(({setRegisterVisible, setLoginVisible}) => {
    const {user} = useContext(AuthContext);
    const [formData, setFormData] = useState({
        login: '',
        password: ''
    })

    const singIn = async (e) => {
        e.preventDefault()
        console.log('Validation')
        if(formData.login && formData.password){
            try {
                const data = await login(formData.login, formData.password);
                console.log(data)
                user.setUser(data)
                user.setIsAuth(true)
                setLoginVisible(false)
            }catch (e){
                alert(e.response.data.message)
            }
        }
    }


    const RegisterOpen = () => {
        setRegisterVisible(true)
        setLoginVisible(false)
    }

    return (
        <form>
            <div className={cl.header}>
                <span className={cl.title}>Авторизация</span>
            </div>
            <div className={cl.body}>
                <InputForm onChange={(e)=> setFormData({...formData, login: e.target.value})} type='login' value={formData.login} id={'authenticationLogin'} title='Login'/>
                <InputForm onChange={(e)=> setFormData({...formData, password: e.target.value})} type='password' value={formData.password} id={'authenticationPassword'} title='Password' autoComplete="on"/>
                <ButtonForm onClick={(e)=>singIn(e)}>
                    Login
                </ButtonForm>
                <div onClick={()=>RegisterOpen()} className={cl.register}>Регистрация</div>
            </div>
        </form>
    );
});

export default LoginForm;
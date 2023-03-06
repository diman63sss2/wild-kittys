import React, {useState} from 'react';
import './styles/App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header/Header";
import PageContainer from "./components/PageContainer";
import {AuthContext} from "./context";


const App = () => {
    const [info, setInfo] = useState(false);
    const [balance, setBalance] = useState(0);
    const [dataUser, setDataUser] = useState({
        authorize:  false,
        login: '',
    });

    return (
        <AuthContext.Provider value={{
            info,
            setInfo,
            balance,
            setBalance,
            dataUser,
            setDataUser
        }}>
            <BrowserRouter>
                <Header/>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>
    );
};

export default App;

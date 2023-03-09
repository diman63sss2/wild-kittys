import React, {useState} from 'react';
import './styles/Themes.css';
import './styles/App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header/Header";
import {AuthContext} from "./context";
import ThemeProvider from "./providers/ThemeProvider";


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
            <ThemeProvider>
                <BrowserRouter>
                        <Header/>
                        <AppRouter/>
                </BrowserRouter>
            </ThemeProvider>
        </AuthContext.Provider>
    );
};

export default App;

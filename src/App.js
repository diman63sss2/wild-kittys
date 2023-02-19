import React from 'react';
import './styles/App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/header/Header";
import PageContainer from "./components/PageContainer";

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <PageContainer>
                <AppRouter/>
            </PageContainer>
        </BrowserRouter>
    );
};

export default App;

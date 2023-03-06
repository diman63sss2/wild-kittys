import React from 'react';
import img from '../img/main-banner.png';
import PageContainer from "../components/PageContainer";

const Main = () => {
    return (
        <PageContainer>
            <img src={img} alt="img"/>
        </PageContainer>
    );
};

export default Main;
import React, {useContext} from 'react';
import {AuthContext} from "../../context";

const HeaderBalance = () => {
    const {balance} = useContext(AuthContext);
    return (
        <div className="header__tools__price__container">
            <div className="header__tools__price__title">
                Баланс
            </div>
            <div className="header__tools__price__value">
                {balance}
            </div>
        </div>
    );
};

export default HeaderBalance;
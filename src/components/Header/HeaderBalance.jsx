import React, {useContext} from 'react';
import {AuthContext} from "../../context";
import {observer} from "mobx-react-lite";

const HeaderBalance = observer(() => {
    const {user} = useContext(AuthContext);
    return (
        <div className="header__tools__price__container">
            <div className="header__tools__price__title">
                Баланс
            </div>
            <div className="header__tools__price__value">
                {user.balance}
            </div>
        </div>
    );
});

export default HeaderBalance;
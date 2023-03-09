import React, {useState} from 'react';
import ModalBase from "../UI/Modal/ModalBase";
import DepositForm from "../Forms/DepositForm/DepositForm";
import imgPlus from "../../img/utitlity-pluse.svg";
import imgCard from "../../img/utitlity-card.svg";
import imgShare from "../../img/utitlity-share.svg";
import HeaderTheme from "./HeaderTheme";
import {Link} from "react-router-dom";

const HeaderUtilities = ({dataUser}) => {
    const [modalDeposit, setModalDeposit] = useState(false);

    if(dataUser.authorize) {
        return (
            <div className="header__tools__utilities">
                <ModalBase visible={modalDeposit} setVisible={setModalDeposit}>
                    <DepositForm/>
                </ModalBase>
                <div onClick={()=>setModalDeposit(true)} className="header__tools__utility">
                    <img src={imgPlus} alt="img" className="header__tools__utility__img"/>
                </div>
                <Link to={'/brush'} className="header__tools__utility">
                    <img src={imgCard} alt="img" className="header__tools__utility__img"/>
                </Link>
                <HeaderTheme/>

            </div>
        );
    }
    return (
        <div className="header__tools__utilities">
            <HeaderTheme/>
            <div className="header__tools__utility">
                <img src={imgShare} alt="img" className="header__tools__utility__img"/>
            </div>
        </div>
    );
};

export default HeaderUtilities;
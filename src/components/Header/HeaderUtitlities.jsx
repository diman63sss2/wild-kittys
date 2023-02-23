import React, {useState} from 'react';
import imgPluse from "../../img/utitlity-pluse.svg";
import imgCard from "../../img/utitlity-card.svg";
import imgTheme from "../../img/utitlity-theme.svg";
import imgShare from "../../img/utitlity-share.svg";
import ModalBase from "../UI/Modal/ModalBase";
import DepositForm from "../DepositForm/DepositForm";

const HeaderUtitlities = () => {
    const [modalDeposit, setModalDeposit] = useState(false);

    return (
        <div className="header__tools__utilities">
            <ModalBase visible={modalDeposit} setVisible={setModalDeposit}>
                <DepositForm/>
            </ModalBase>
            <div onClick={()=>setModalDeposit(true)} className="header__tools__utility">
                <img src={imgPluse} alt="img" className="header__tools__utility__img"/>
            </div>
            <div className="header__tools__utility">
                <img src={imgCard} alt="img" className="header__tools__utility__img"/>
            </div>
            <div className="header__tools__utility">
                <img src={imgTheme} alt="img" className="header__tools__utility__img"/>
            </div>
            <div className="header__tools__utility">
                <img src={imgShare} alt="img" className="header__tools__utility__img"/>
            </div>
        </div>
    );
};

export default HeaderUtitlities;
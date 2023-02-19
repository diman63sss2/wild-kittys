import React from 'react';
import imgPluse from "../../img/utitlity-pluse.svg";
import imgCard from "../../img/utitlity-card.svg";
import imgTheme from "../../img/utitlity-theme.svg";
import imgShare from "../../img/utitlity-share.svg";
import HeaderBalance from "./HeaderBalance";
import HeaderUtitlities from "./HeaderUtitlities";

const HeaderTools = () => {
    return (
        <div className="header__tools">
            <HeaderBalance/>
            <HeaderUtitlities/>
        </div>
    );
};

export default HeaderTools;
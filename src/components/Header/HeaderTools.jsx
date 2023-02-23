import React from 'react';
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
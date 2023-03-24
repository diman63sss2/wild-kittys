import React from 'react';
import HeaderBalance from "./HeaderBalance";
import HeaderUtilities from "./HeaderUtilities";


const HeaderTools = ({userAuth}) => {
    return (
        <div className="header__tools">
            {  userAuth &&
                <HeaderBalance/>
            }
            <HeaderUtilities userAuth={userAuth}/>
        </div>
    );
};

export default HeaderTools;
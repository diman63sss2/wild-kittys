import React from 'react';
import HeaderBalance from "./HeaderBalance";
import HeaderUtilities from "./HeaderUtilities";


const HeaderTools = ({dataUser}) => {
    return (
        <div className="header__tools">
            {  dataUser.authorize &&
                <HeaderBalance/>
            }
            <HeaderUtilities dataUser={dataUser}/>
        </div>
    );
};

export default HeaderTools;
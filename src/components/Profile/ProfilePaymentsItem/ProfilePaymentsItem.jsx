import React from 'react';
import auctionImage from "../../../img/order_image.png";
import galochka from "../../../img/icons8-galochka1.svg";
import cl from './ProfilePyamentsItem.module.css';
const ProfilePaymentsItem = ({id}) => {
    return (
        <div className={cl.container}>

            <div>
                <p className={cl.description}>№</p>
                <p className={cl.text}>{id}</p>
            </div>
            <div className={'profile__order__product'}>
                <p className={cl.description}>товар</p>
                <p className={cl.textActive}>дуэт <img className={cl.image} src={auctionImage} alt="auctionImage"/> </p>

            </div>
            <div>
                <p className={cl.description}>цена</p>
                <p className={cl.text}>999.00</p>
            </div>
            <div>
                <p className={cl.description}>комиссия</p>
                <p className={cl.text}>20.00</p>
            </div>
            <div>
                <p className={cl.description}>к получению</p>
                <p className={cl.text}>979.00</p>
            </div>
            <div>
                    <img src={galochka} alt="galochka"/>
            </div>
        </div>
    );
};

export default ProfilePaymentsItem;
import React from 'react';
import auctionImage from "../../../img/order_image.png";
import cl from './ProfileHistoryItem.module.css';
const ProfileHistoryItem = ({id}) => {
    return (
        <div className={cl.container}>

            <div>
                <p className={cl.description}>№</p>
                <p className={cl.text}>{id}</p>
            </div>
            <div>
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
        </div>
    );
};

export default ProfileHistoryItem;
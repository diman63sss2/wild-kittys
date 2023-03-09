import React from 'react';
import auctionImage from "../../../img/auction-image.png";
import cl from './ProfileMyAuctionItem.module.css';
const ProfileMyAuctionItem = () => {
    return (
        <div className={cl.container}>
            <img src={auctionImage} alt="auctionImage"/>
            <div>
                <p className={cl.description}>название</p>
                <p className={cl.text}>Девочки</p>
            </div>
            <div>
                <p className={cl.description}>начальная цена</p>
                <p className={cl.text}>9999.99</p>
            </div>
            <div>
                <p className={cl.description}>текущая цена</p>
                <p className={cl.text}>999999.99</p>
            </div>
            <div>
                <p className={cl.description}>моя цена</p>
                <p className={cl.text}>0.99</p>
            </div>
        </div>
    );
};

export default ProfileMyAuctionItem;
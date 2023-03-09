import React from 'react';
import auctionImage from "../../../img/order_image.png";
import cl from './ProfileActiveOrdersItem.module.css'
const ProfileActiveOrdersItem = ({id}) => {
    return (
        <div className={cl.content}>
            <div>
                <p className={cl.description}>№</p>
                <p className={cl.text}>{id}</p>
            </div>
            <div >
                <p className={cl.description}>клиент</p>
                <p className={cl.text}>boy666</p>
            </div>
            <div>
                <p className={cl.description}>товар</p>
                <span id="#show" className={cl.textActive}>дуэт <img className={cl.image} src={auctionImage} alt="auctionImage"/> </span>

            </div>
            <div >
                <p className={cl.description}>цена</p>
                <p className={cl.text}>999.00</p>
            </div>
            <div>
                <p className={cl.description}>логистика</p>
                <p className={cl.text}>СДЭК</p>
            </div>
            <div>
                <p className={cl.description}>заказан</p>
                <p className={cl.text}>01.01.2023</p>
            </div>
            <div>
                <p className={cl.description}>статус</p>
                <p className={cl.text}>в очереди на отправку</p>
            </div>
        </div>
    );
};

export default ProfileActiveOrdersItem;
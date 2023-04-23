import React from 'react';
import galochka from "../../../img/icons8-galochka1.svg";
import cl from './ProfilePyamentsItem.module.css';
const ProfilePaymentsItem = ({props,id}) => {
    const money=props.myPrice-props.commission;
    return (
        <div className={cl.container}>
            <div>
                <p className={cl.description}>№</p>
                <p className={cl.text}>{id}</p>
            </div>
            <div className={cl.textMain}>
                <p className={cl.description}>товар</p>
                <p className={cl.textActive}>{props.title} <img className={cl.image} src={props.image3} alt="auctionImage"/> </p>
            </div>
            <div>
                <p className={cl.description}>цена</p>
                <p className={cl.text}>{props.myPrice}</p>
            </div>
            <div>
                <p className={cl.description}>комиссия</p>
                <p className={cl.text}>{props.commission}</p>
            </div>
            <div>
                <p className={cl.description}>к получению</p>
                <p className={cl.text}>{money}</p>
            </div>
            <div>
                <img src={galochka} alt="galochka"/>
            </div>
        </div>
    );
};

export default ProfilePaymentsItem;
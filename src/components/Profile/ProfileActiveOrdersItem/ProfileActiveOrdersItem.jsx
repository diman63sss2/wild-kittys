import React from 'react';
import cl from './ProfileActiveOrdersItem.module.css'
const ProfileActiveOrdersItem = ({props, id}) => {
    return (
        <div className={cl.content}>
            <div>
                <p className={cl.description}>№</p>
                <p className={cl.text}>{id}</p>
            </div>
            <div >
                <p className={cl.description}>клиент</p>
                <p className={cl.text}>{props.client}</p>
            </div>
            <div className={cl.mainText}>
                <p className={cl.description}>товар</p>
                <span id="#show" className={cl.textActive}>{props.title} <img className={cl.image} src={props.image3} alt="auctionImage"/> </span>

            </div>
            <div >
                <p className={cl.description}>цена</p>
                <p className={cl.text}>{props.myPrice}</p>
            </div>
            <div>
                <p className={cl.description}>логистика</p>
                <p className={cl.text}>{props.logical}</p>
            </div>
            <div>
                <p className={cl.description}>заказан</p>
                <p className={cl.text}>{props.data}</p>
            </div>
            <div>
                <p className={cl.description}>статус</p>
                <p className={cl.text}>{props.status}</p>
            </div>
        </div>
    );
};

export default ProfileActiveOrdersItem;
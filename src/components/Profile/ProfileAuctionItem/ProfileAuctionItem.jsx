import React from 'react';
import cl from './ProfileAuctionItem.module.css';
const ProfileAuctionItem = ({props,setActive,active, setContent}) => {
    return (

        <div onClick={()=>{setActive("AuctionItem"); setContent(props)}} className={cl.container}>
            <img src={props.image2} alt="auctionImage"/>
            <div>
                <p className={cl.description}>название</p>
                <p className={cl.text}>{props.title}</p>
            </div>
            <div>
                <p className={cl.description}>начальная цена</p>
                <p className={cl.text}>{props.startPrice}</p>
            </div>
            <div>
                <p className={cl.description}>текущая цена</p>
                <p className={cl.text}>{props.nowPrice}</p>
            </div>
            <button className={cl.bottom}>участвовать</button>
        </div>

    );
};

export default ProfileAuctionItem;
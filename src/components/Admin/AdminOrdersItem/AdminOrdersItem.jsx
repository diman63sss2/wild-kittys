import React from 'react';
import "./AdminOrdersItem.css"
import auctionImage from "../../../img/order_image.png";

const AdminOrdersItem = (props) => {


    return (
        <div>
            <div className={'orders__item'}>
                <p className={'orders__item__id'}>{props.id}</p>
                <p className={'orders__item__client'}>{props.client}</p>
                <p className={'orders__item__product'}
                    onMouseEnter={() => {
                    document.querySelector('.orders__item__img').classList.add('orders__item__img__active')}}
                    onMouseLeave={() => {
                    document.querySelector('.orders__item__img').classList.remove('orders__item__img__active')
                    }}>{props.product}</p>
                <p className={'orders__item__price'}>{props.price}</p>
                <p className={'orders__item__logic'}>{props.logic}</p>
                <p className={'orders__item__date'}>{props.date}</p>
                <p className={'orders__item__status'}>{props.status}</p>
            </div>
            <img className={'orders__item__img'} src={auctionImage} alt="product"/>
        </div>
    );
};

export default AdminOrdersItem;
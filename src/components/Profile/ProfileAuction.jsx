import React from 'react';
import auctionImage from '../../img/activeAuctionImage.png'
const ProfileAuction = () => {
    return (
        <div className={'profile__content'}>
            <h2 className={'profile__hiading2'}>Действующий аукцион</h2>
            <div className={'profile__active_auction'}>
                <div className={'profile__active_auction__left'}>
                    <img className={'profile__active_auction__image'} src={auctionImage} alt="auctionImage"/>
                    <div className={'profile__active_auction__lists'}>
                        <ul className={'profile__active_auction__list_price'}>
                            <li className={'profile__active_auction__item_price'}>
                                <p className={'profile__active_auction__item_price__text profile__text'}>999.00</p>
                            </li>
                            <li className={'profile__active_auction__item_price'}>
                                <p className={'profile__active_auction__item_price__text profile__text'}>1010.00</p>
                            </li>
                            <li className={'profile__active_auction__item_price'}>
                                <p className={'profile__active_auction__item_price__text profile__text'}>1010.00</p>
                            </li>
                        </ul>
                        <ul className={'profile__active_auction__list_time'}>
                        <li className={'profile__active_auction__item_time'}>
                            <p className={'profile__active_auction__item_time__text profile__text__description'}>12:05</p>
                        </li>
                        <li className={'profile__active_auction__item_time'}>
                            <p className={'profile__active_auction__item_time__text profile__text__description'}>12:04</p>
                        </li>
                        <li className={'profile__active_auction__item_time'}>
                            <p className={'profile__active_auction__item_time__text profile__text__description'}>12:03</p>
                        </li>
                        </ul>
                    </div>
                </div>
                <div className={'profile__active_auction__right'}>
                    <h3 className={'profile__hiading3'}>Название</h3>
                    <div className={'profile__active_auction_price'}>
                        <p className={'profile__active_auction__text_description profile__text__description'}> текущая цена</p>
                        <p className={'profile__active_auction_text profile__text'}>999.00</p>
                    </div>
                    <div className={'profile__active_auction_price'}>
                        <p className={'profile__active_auction__text_description profile__text__description'}> начальная цена</p>
                        <p className={'profile__active_auction_text profile__text'}>100000.00</p>
                    </div>
                    <div className={'profile__active_auction_price'}>
                        <p className={'profile__active_auction__text_description profile__text__description'}>минимальная цена </p>
                        <p className={'profile__active_auction_text profile__text'}>998.00</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileAuction;
import React from 'react';
import card from '../img/catalog-cart-stub.png';
import select from "../img/icon_select_1.svg";
import "../styles/App.css";

const Brush = () => {

    return (
        <div className="brush">
            <div className="container">
                <div className="brush__content">
                    <h1>Корзина</h1>
                    <h2>товары в корзине</h2>
                    <div className="brush__useful_content">
                        <div className="brush__list">
                            <div className="brush__list__item">
                                <img className="brush__list__item__pic" src={card}/>
                                <div className="brush__list__item__text_block">
                                    <h3 className="brush__list__item__text_block__name">Название</h3>
                                    <h4 className="brush__list__item__text_block__price">9999.99</h4>
                                </div>
                                <img className="brush__list__item__select" src={select}/>
                            </div>
                            <div className="brush__list__item">
                                <img className="brush__list__item__pic" src={card}/>
                                <div className="brush__list__item__text_block">
                                    <h3 className="brush__list__item__text_block__name">Название</h3>
                                    <h4 className="brush__list__item__text_block__price">9999.99</h4>
                                </div>
                                <img className="brush__list__item__select" src={select}/>
                            </div>
                            <div className="brush__list__item">
                                <img className="brush__list__item__pic" src={card}/>
                                <div className="brush__list__item__text_block">
                                    <h3 className="brush__list__item__text_block__name">Название</h3>
                                    <h4 className="brush__list__item__text_block__price">9999.99</h4>
                                </div>
                                <img className="brush__list__item__select" src={select}/>
                            </div>
                        </div>
                        <button className="brush__btn">Выставить на аукцион</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brush;
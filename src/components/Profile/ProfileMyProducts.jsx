import React from 'react';
import CatalogFilters from "../Catalog/CatalogFilters";
import image from "../../img/myProductGirl.png"

import ProfileMyProductsList from "./ProfileMyProductsList/ProfileMyProductsList";
const ProfileMyProducts = () => {
    const list =[{
        image: image,
        title:'название',
        price:'999.99'
    }, {
        image: image,
        title:'название',
        price:'999.99'
    }, {
        image: image,
        title:'название',
        price:'999.99'
    }, {
        image: image,
        title:'название',
        price:'999.99'
    }, {
        image: image,
        title:'название',
        price:'999.99'
    }, {
        image: image,
        title:'название',
        price:'999.99'
    }, {
        image: image,
        title:'название',
        price:'999.99'
    }, {
        image: image,
        title:'название',
        price:'999.99'
    }, {
        image: image,
        title:'название',
        price:'999.99'
    }, {
        image: image,
        title:'название',
        price:'999.99'
    }]
    return (
        <div className={'profile__content'}>
            <h2 className={'profile__hiading2'}>Мои товары</h2>
            <CatalogFilters/>
            <span className={'profile__product__text'}>Девочки</span>
            <div className={'profile__product__nav'}>
                <span className={'profile__product__text'}>соло</span>
                <span className={'profile__product__text'}>вдвоем</span>
                <span className={'profile__product__text'}>втроем</span>
                <span className={'profile__product__text'}>4 и более</span>
                <span className={'profile__product__text'}>в одежде</span>
            </div>
            <div className={'profile__product__list'}>
            {
                list.map((el,num) =>
                    <ProfileMyProductsList key={num} post={el}/>
                )
            }
            </div>
        </div>
    );
};

export default ProfileMyProducts;
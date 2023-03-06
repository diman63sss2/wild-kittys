import React from 'react';
import CatalogListItem from "../CatalogListItem/CatalogListItem";
import imgCart from '../../../img/catalog-cart-stub.png';
import cl from './CatalogList.module.css';

const CatalogList = () => {
    const list = [{
        title: 'Название',
        desc: 'Описание ОписаниеОписание Оооописание. Поставьте пятерочку',
        price: 999,
        img: imgCart,
        tags: []
    }, {
        title: 'Название 2',
        desc: 'Описание ОписаниеОписание Оооописание. Поставьте пятерочку',
        price: 999,
        img: imgCart,
        tags: ['Тег 1', 'Тег 2']
    }, {
        title: 'Название 3',
        desc: 'Описание ОписаниеОписание Оооописание. Поставьте пятерочку',
        price: 999,
        img: imgCart,
        tags: ['Тег 1', 'Тег 2']
    }, {
        title: 'Название 4',
        desc: 'Описание ОписаниеОписание Оооописание. Поставьте пятерочку',
        price: 999,
        img: imgCart,
        tags: ['Тег 1', 'Тег 2']
    }, {
        title: 'Название 5',
        desc: 'Описание ОписаниеОписание Оооописание. Поставьте пятерочку',
        price: 999,
        img: imgCart,
        tags: ['Тег 1', 'Тег 2']
    }];
    const item = {
      title: 'Название',
      desc: 'Описание ОписаниеОписание Оооописание. Поставьте пятерочку',
      price: 999,
      img: imgCart,
      tags: ['Тег 1', 'Тег 2']

    };
    return (
        <div className={cl.list}>
            {
                list.map((el,num) =>
                    <CatalogListItem key={num} post={el}/>
                )
            }

        </div>
    );
};

export default CatalogList;
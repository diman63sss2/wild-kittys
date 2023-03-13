import React, {useState} from 'react';
import CatalogFilters from "../../Catalog/CatalogFilters";
import image from "../../../img/myProductGirl.png"
import cl from './ProfileMyProducts.module.css'
import ProfileMyProductsList from "../ProfileMyProductsList/ProfileMyProductsList";
import getVisible from "./getVisible";
const ProfileMyProducts = () => {
    const [visible1, setVisible1] = useState(cl.nav);
    const [visible2, setVisible2] = useState(cl.nav);
    const [visible3, setVisible3] = useState(cl.nav);
    console.log(visible1)
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
            <div className={cl.nav__visible}>
                <span onClick={()=>{setVisible1(getVisible(visible1));setVisible2(cl.nav);setVisible3(cl.nav) }} className={cl.text__main}>Девочки</span>
                <span onClick={()=>{setVisible2(getVisible(visible2));setVisible1(cl.nav);setVisible3(cl.nav) }} className={cl.text__main}>Фентези</span>
                <span onClick={()=>{setVisible3(getVisible(visible3));setVisible2(cl.nav);setVisible1(cl.nav) }} className={cl.text__main}>Что-то</span>
            </div>
            <div className={visible1}>
                <span className={cl.text}>соло</span>
                <span className={cl.text}>вдвоем</span>
                <span className={cl.text}>втроем</span>
                <span className={cl.text}>4 и более</span>
                <span className={cl.text}>в одежде</span>
            </div>
            <div className={visible2}>
                <span className={cl.text}>драконы</span>
                <span className={cl.text}>демонесы</span>
                <span className={cl.text}>эльфы</span>
                <span className={cl.text}>монстродевочки</span>
                <span className={cl.text}>готика</span>
            </div>
            <div className={visible3}>
                <span className={cl.text}>симпсоны</span>
                <span className={cl.text}>грифины</span>
                <span className={cl.text}>футурама</span>
            </div>
            <div className={cl.list}>
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
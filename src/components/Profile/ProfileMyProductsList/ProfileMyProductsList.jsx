import React, {useState} from 'react';
import cl from "./ProfileMyProductsList.module.css";
import ModalBase from "../../UI/Modal/ModalBase";
import img from '../../../img/modalImage.png'
const ProfileMyProductsList = ({post}) => {
    const [visible, setVisible] = useState(false);
    const [counter, setCounter] = useState(0);
    return (
        <div onClick={()=> setVisible(true)} className={cl.item} >
            <div className={cl.img__container}>
                <img src={post.image} alt="{post.title}"/>
            </div>
            <div className={cl.content}>
                <span className={cl.title}>
                    {post.title}
                </span>
                <span className={cl.price}>
                    {post.price} р
                </span>
            </div>
            <div onClick={(e) => e.stopPropagation()}>
                <ModalBase visible={visible} setVisible={setVisible}>
                    <div className={cl.card__container}>
                        <div className={cl.card__img__container}>
                            <img src={img} alt="{post.title}"/>
                        </div>
                        <div className={cl.card__info}>
                            <span className={cl.card__title}>
                                {post.title}
                            </span>
                            <span className={cl.card__price}>
                                {post.price} р
                            </span>
                            <div className={cl.counter}>
                                <button onClick={()=> setCounter(counter-1)} className={cl.counter__button__minus}>-</button>
                                <span className={cl.counter__text}>{counter}</span>
                                <button onClick={()=> setCounter(counter+1)} className={cl.counter__button__plus}>+</button>
                            </div>
                        </div>
                    </div>
                </ModalBase>
            </div>
        </div>
    );
};

export default ProfileMyProductsList;
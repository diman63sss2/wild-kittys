import React, {useState} from 'react';
import cl from './CatalogListItem.module.css'
import ModalBase from "../../UI/Modal/ModalBase";

const CatalogListItem = ({post}) => {
    const [visible, setVisible] = useState(false);

    return (
        <div onClick={()=> setVisible(true)} className={cl.item} >
            <div className={cl.img__container}>
                <img src={post.img} alt="{post.title}"/>
            </div>
            <div className={cl.content}>
                <div className={cl.head}>
                    <span className={cl.title}>
                        {post.title}
                    </span>
                    <span className={cl.price}>
                        {post.price} р
                    </span>
                </div>
                <div className={cl.tag}>
                    {post.tags[0]}
                </div>
            </div>
            <div onClick={(e) => e.stopPropagation()}>
                <ModalBase visible={visible} setVisible={setVisible}>
                    <div className={cl.card__container}>
                        <div className={cl.card__img__container}>
                            <img src={post.img} alt="{post.title}"/>
                        </div>
                        <div className={cl.card__info}>
                            <div>
                                <span className={cl.card__title}>
                                    {post.title}
                                </span>

                                <div className={cl.card__tags}>
                                    {
                                        post.tags.map((el, num) =>
                                            <div key={num} className={cl.card__tag} >
                                                {el}
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                            <p className={cl.card__desc}>
                                {post.desc}
                            </p>
                            <div className={cl.card__footer}>
                                <span className={cl.card__price}>
                                    {post.price} р
                                </span>
                                <div className={cl.card__btn}>В корзину</div>
                            </div>
                        </div>
                    </div>
                </ModalBase>
            </div>

        </div>
    );
};

export default CatalogListItem;
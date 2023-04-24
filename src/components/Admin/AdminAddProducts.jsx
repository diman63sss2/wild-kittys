import React, {useState} from 'react';
import img from "../../img/activeAuctionImage.png";
import './Admin_styles/AdminAddProducts.css';

const AdminAddProducts = (props) => {

  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [pack, setPack] = useState();

  return (
    <div className={'block'}>
      <img src={img} alt="product" className="block__img"/>
      <div className="block__name">
        <p>название</p>
        <input type="text" onChange={e => {setName(e.target.value)}} className="name__input"/>
      </div>
      <div className="block__price">
        <p>цена</p>
        <input type="text" onChange={e => {setPrice(e.target.value)}} className="price__input"/>
      </div>
      <div className="block__pack">
        <p>количество</p>
        <input type="text" onChange={e => {setPack(e.target.value)}} className="pack__input"/>
      </div>
      <button className="block__add">добавить</button>
    </div>
  );
};

export default AdminAddProducts;
import React, { useState, useEffect} from "react";

function CartItem({ item, remove, subChange , changeQuantity}) {
    const [quantity, setQuantity ] = useState(1)
    const [bool, setBool ] = useState(false)
    function quantityChange(quantity) {
        setQuantity (+quantity)
        setBool(!bool)
        changeQuantity(item , quantity)
       
    }

  useEffect (() => {
    subChange(bool)
  }, [quantity])

  return (
    <div className="cart__item">
      <div className="cart__book">
        <img
          src={item.url}
          className="cart__book--img"
          alt=""
        />
        <div className="cart__book--info">
          <span className="cart__book--title">{item.title}</span>
          <span className="cart__book--price">${item.salePrice? item.salePrice.toFixed(2) :  item.originalPrice.toFixed(2)}</span>
          <button className="cart__book--remove " onClick={remove}>remove</button>
        </div>
      </div>
      <div className="cart__quantity">
        <input type="number" onChange={ (event) => quantityChange(event.target.value)} value={item.quantity} min={0} max={99} className="cart__input" />
      </div>
      <div className="cart__total">${(item.quantity * (item.salePrice||item.originalPrice)).toFixed(2)}</div>
    </div>
  );
}

export default CartItem;

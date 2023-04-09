import React, { useState, useEffect } from "react";
import CartItem from "../components/ui/CartItem";
import EmptyCart from '../assets/empty_cart.svg'
import { Link } from "react-router-dom";

function Cart({ cart, changeQuantity, remove }) {
  const [subtotal, setSubtotal] = useState(0);
  const [subBool, setSubBool] = useState(false);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  function subChange(bool) {
    setSubBool(bool);
  }

  useEffect(() => {
    setSubtotal(
      cart.reduce(
        (acc, curr) =>
          acc + curr.quantity * (curr.salePrice || curr.originalPrice),
        0
      )
    );
  }, [subBool, cart]);
  useEffect(() => {
    setTax(subtotal * (10 / 100));
  }, [subtotal, cart]);
  useEffect(() => {
    setTotal(tax + subtotal);
  }, [tax, cart]);
  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>
              <div className="cart__body">
                {cart.map((item) => (
                  <CartItem
                    remove={() => remove(item)}
                    subChange={subChange}
                    changeQuantity={changeQuantity}
                    item={item}
                    key={item.id}
                  />
                ))}

              </div>
             { cart.length ===0 && <div className="cart__empty">
                <img src={EmptyCart} alt="" className="cart__empty--img" />
                <h2>You don't have any books in the cart</h2>
                <Link to='/books'>
                <button className="btn">browse books</button>
                </Link>
              </div>}
            </div>
           { cart.length > 0 && (<div className="total">
              <div className="total__item total__sub-total">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="total__item total__tax">
                <span>tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="total__item total__price">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button
                onClick={() => alert("haven't gotten around to doing this :(")}
                className="btn"
              >
                Proceed to Checkout
              </button>
            </div>)}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Cart;

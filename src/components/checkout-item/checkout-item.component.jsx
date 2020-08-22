import React from "react";
import { connect } from "react-redux";

import "./checkout-item.styles.scss";

import { removeItem } from "../../redux/cart/cart.actions";
import { decreaseQuantity } from "../../redux/cart/cart.actions";
import { increaseQuantity } from "../../redux/cart/cart.actions";

const CheckoutItem = ({
  item,
  removeCartItem,
  decreaseQuantity,
  increaseQuantity,
}) => {
  const { name, price, quantity, imageUrl } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => decreaseQuantity(item)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => increaseQuantity(item)}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => removeCartItem(item)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeCartItem: (item) => dispatch(removeItem(item)),
  decreaseQuantity: (item) => dispatch(decreaseQuantity(item)),
  increaseQuantity: (item) => dispatch(increaseQuantity(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);

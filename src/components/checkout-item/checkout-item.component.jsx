import React from "react";

import "./checkout-item.styles.scss";

import { removeItem } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

const CheckoutItem = ({ item, removeCartItem }) => {
  const { name, price, quantity, imageUrl } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{price}</span>
      <span className="price">{quantity}</span>
      <div className="remove-button" onClick={() => removeCartItem(item)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeCartItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);

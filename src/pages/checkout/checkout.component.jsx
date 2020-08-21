import React from "react";

import "./checkout.styles.scss";

import { connect } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { selectTotalPrice } from "../../redux/cart/cart.selectors";

const Checkout = ({ cartItems, totalPrice }) => {
  const headers = ["Products", "Description", "Quantity", "Price", "Remove"];
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        {headers.map((header) => (
          <div className="header-block">
            <span>{header}</span>
          </div>
        ))}
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}

      <div className="total">Total: ${totalPrice}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
  totalPrice: selectTotalPrice(state),
});

export default connect(mapStateToProps)(Checkout);

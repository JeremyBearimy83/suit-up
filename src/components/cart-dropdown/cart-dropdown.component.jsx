import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

import { connect } from "react-redux";

import { selectCartItems } from "../../redux/cart/cart.selectors";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      {cartItems.length ? (
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </div>
      ) : (
        <span className="empty-message"> Your cart is empty</span>
      )}

      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};
const mapStateToProps = (state) => ({ cartItems: selectCartItems(state) });
export default connect(mapStateToProps)(CartDropdown);

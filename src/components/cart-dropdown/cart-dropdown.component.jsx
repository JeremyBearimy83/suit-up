import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

import { connect } from "react-redux";

import { selectCartItems } from "../../redux/cart/cart.selectors";

import { withRouter } from "react-router-dom";

import { toggleCart } from "../../redux/cart/cart.actions";
const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      {cartItems.length ? (
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </div>
      ) : (
        <span className="empty-message"> Your cart is empty!</span>
      )}

      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCart());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};
const mapStateToProps = (state) => ({ cartItems: selectCartItems(state) });
export default withRouter(connect(mapStateToProps)(CartDropdown));

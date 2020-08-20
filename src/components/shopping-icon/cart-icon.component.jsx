import React from "react";

import { connect } from "react-redux";

import { toggleCart } from "../../redux/cart/cart.actions";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

import { selectNumOfItems } from "../../redux/cart/cart.selectors";

const CartIcon = (props) => {
  return (
    <div className="cart-icon" onClick={props.toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{props.numOfItems}</span>
    </div>
  );
};
const mapStateToProps = (state) => ({
  numOfItems: selectNumOfItems(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

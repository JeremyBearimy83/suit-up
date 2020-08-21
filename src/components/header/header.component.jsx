import React from "react";

import "./header.styles.scss";

import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import { auth } from "../../firebase/firebase.utils";

import { connect } from "react-redux";

import CartIcon from "../shopping-icon/cart-icon.component";

import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { selectCartHidden } from "../../redux/cart/cart.selectors.js";

import { selectCurrentUser } from "../../redux/user/user.selectors";

const Header = ({ currentUser, isCartDropdownHidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo"></Logo>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/shop">
          Contact
        </Link>

        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign-out
          </div>
        ) : (
          <Link className="option" to="sign-in">
            Sign-in
          </Link>
        )}
        <CartIcon />
      </div>
      {isCartDropdownHidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  isCartDropdownHidden: selectCartHidden(state),
});

export default connect(mapStateToProps)(Header);

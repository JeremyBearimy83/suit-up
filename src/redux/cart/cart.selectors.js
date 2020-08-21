import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectNumOfItems = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((accumulator, item) => accumulator + item.quantity, 0)
);

export const addItemToCart = (cartItems, newItem) => {
  const existingItem = cartItems.find((item) => item.id === newItem.id);

  if (existingItem) {
    return cartItems.map((item) =>
      item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...cartItems, { ...newItem, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  return cartItems.filter((item) => item.id !== itemToRemove.id);
};

export const decreaseQuantityFromCart = (cartItems, itemToDecrease) => {
  const decreaseItem = cartItems.find((item) => item.id === itemToDecrease.id);

  if (decreaseItem.quantity === 1)
    return removeItemFromCart(cartItems, itemToDecrease);

  return cartItems.map((item) =>
    item.id === decreaseItem.id
      ? { ...item, quantity: decreaseItem.quantity - 1 }
      : item
  );
};

export const increaseQuantityInCart = (cartItems, itemToIncrease) => {
  const increaseItem = cartItems.find((item) => item.id === itemToIncrease.id);

  return cartItems.map((item) =>
    item.id === increaseItem.id
      ? { ...item, quantity: increaseItem.quantity + 1 }
      : item
  );
};

import React, { createContext, useState } from 'react';
import { message } from 'antd';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const [messageApi] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a success message',
    });
  };

  const addToCart = (name, price, quantity = 1) => {
    // check if the item is already in cart
    const isItemInCart = cartItems.findIndex(Item => Item.name === name) !== -1;
    if (isItemInCart) {
      // get the index of the cart item
      const existingCartItemIndex = cartItems.findIndex(
        Item => Item.name === name
      );
      // console.log('already in cart', cartItems[existingCartItemIndex]);
      // get the item object itself
      const existingCartItem = cartItems[existingCartItemIndex];
      // update quantity of the item
      const updatedExistingCartItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + quantity,
      };
      // get all the cart items
      const updatedCartItems = [...cartItems];
      // replace the old cart item with the new one with the updated quantity
      updatedCartItems[existingCartItemIndex] = updatedExistingCartItem;
      setCartItems([...updatedCartItems]);
      message.success('already in your cart, quantity updated!');
    } else {
      setCartItems(prevState => [...prevState, { name, price, quantity }]);
      message.success('added to cart');
    }
  };

  const removeFromCart = name => {
    const updatedCartItems = cartItems.filter(item => item.name !== name);
    setCartItems([...updatedCartItems]);
    console.log('will be removed', name);
    console.log(cartItems);
    message.success('item removed');
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

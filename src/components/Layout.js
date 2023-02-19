import React from 'react';
import CartProvider from '../context/cartContext';
import '../styles/global.css';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <>
      <CartProvider>
        <Header />
        <div className="container">{children}</div>
        <Footer />
      </CartProvider>
    </>
  );
}

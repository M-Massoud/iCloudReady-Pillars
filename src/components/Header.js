import React, { useContext, useState } from 'react';
import { CartContext } from '../context/cartContext';
import * as styles from '../styles/header.module.css';
import CartSider from './CartSider';
import { ShoppingCartOutlined, DatabaseOutlined } from '@ant-design/icons';

export default function Header() {
  const [openCartSider, setOpenCartSider] = useState(false);
  const { cartItems } = useContext(CartContext);

  const toggleCartSider = () => {
    setOpenCartSider(prevState => !prevState);
  };

  return (
    <header>
      <div>
        <h1>Welcome to iCloudReady! </h1>
        <p>
          You have started <b> 30 day trial!</b>
        </p>
      </div>

      <div className={styles.architectsBox}>
        <div>
          <img
            className={`${styles.architectImage} `}
            src="../images/architect-1.png"
            alt="architectural engineer image1"
          />
          <img
            className={`${styles.architectImage} ${styles.architectImage2}`}
            src="../images/architect-2.png"
            alt="architectural engineer image2"
          />
          <img
            className={`${styles.architectImage} ${styles.architectImage3}`}
            src="../images/architect-3.png"
            alt="architectural engineer image3"
          />
          <img
            className={`${styles.architectImage} ${styles.architectImage4}`}
            src="../images/architect-4.png"
            alt="architectural engineer image4"
          />

          <p className={`${styles.architectImage} ${styles.moreArchitects}`}>
            +3
          </p>
        </div>
        <div>
          <p>Our architects are here to help</p>
          <p className="light-blue-text">Book a free session</p>
        </div>
      </div>

      <div className={styles.iconsContainer}>
        <div className={styles.iconBox}>
          {<span className={styles.iconBadge}>{cartItems.length}</span>}
          <ShoppingCartOutlined
            className={styles.icon}
            onClick={toggleCartSider}
          />
        </div>
        <div className={styles.iconBox}>
          <span className={styles.iconBadge}>1</span>
          <DatabaseOutlined className={styles.icon} />
        </div>
        {openCartSider && (
          <CartSider isOpened={openCartSider} closeSider={setOpenCartSider} />
        )}
      </div>
    </header>
  );
}

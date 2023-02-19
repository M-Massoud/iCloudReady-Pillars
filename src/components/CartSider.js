import React, { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import { Drawer, Table, Button, Divider } from 'antd';
import { DeleteFilled } from '@ant-design/icons';

function EmptyCart() {
  return (
    <div align="middle" style={{ marginTop: '30Vh' }}>
      <img src="../images/empty-cart.png"></img>
      <p style={{ margin: '15px 0 7px' }}>Your run cart is empty!</p>
      <p style={{ color: '#637182' }}>start add your requests here</p>
    </div>
  );
}

const columns = [
  {
    title: 'Product',
    dataIndex: 'product',
    key: 'product',
    // render: text => <a>{text}</a>,
  },
  {
    title: 'Qty',
    dataIndex: 'qty',
    key: 'qty',
  },
  {
    title: 'Remove',
    dataIndex: 'remove',
    key: 'remove',
  },
];

function CartTable() {
  const { cartItems, removeFromCart } = useContext(CartContext);
  //   console.log(cartItems);
  const data = cartItems.map((item, index) => ({
    key: index,
    product: item.name,
    qty: item.quantity,
    remove: (
      <DeleteFilled
        style={{ color: '#DC1C6A', fontSize: '20px' }}
        onClick={() => removeFromCart(item.name)}
      />
    ),
  }));
  return (
    <>
      <Table columns={columns} dataSource={data} pagination={false} />
      <p
        style={{
          margin: '10px',
        }}
      >
        Subtotal
        <span className="light-blue-text" style={{ float: 'right' }}>
          1.00 DTSUs
        </span>
      </p>
      <p style={{ margin: '10px' }}>
        New Payment
        <span className="light-blue-text" style={{ float: 'right' }}>
          No, Inclusive in your package
        </span>
      </p>
      <Divider />

      <p style={{ margin: '10px' }}>
        Total units Consumed
        <span className="light-blue-text" style={{ float: 'right' }}>
          1.00 DTSUs
        </span>
      </p>
      <Button type="primary" size="large" block className="checkout-button">
        Checkout
      </Button>

      <Button type="default" size="large" block className="information-button">
        Back to Run Information
      </Button>
    </>
  );
}

function CartSider({ isOpened, closeSider }) {
  const { cartItems } = useContext(CartContext);

  return (
    <Drawer open={isOpened} closable onClose={() => closeSider(false)}>
      {cartItems.length ? <CartTable /> : <EmptyCart />}
    </Drawer>
  );
}

export default CartSider;

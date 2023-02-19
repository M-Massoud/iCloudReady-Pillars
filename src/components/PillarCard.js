import React, { useContext } from 'react';
import { Link } from 'gatsby';
import * as styles from '../styles/card.module.css';
import { PlusOutlined, ShareAltOutlined } from '@ant-design/icons';
import { Card, Col } from 'antd';
import { CartContext } from '../context/cartContext';

const { Meta } = Card;

export default function PillarCard({
  imgSrc,
  title,
  description,
  points,
  color,
  url,
}) {
  const cartCtx = useContext(CartContext);

  return (
    <Col xs={24} sm={12} md={12} lg={6} xl={6}>
      <Card
        className={styles.pillarCard}
        style={{
          width: 250,
        }}
        cover={
          <img
            alt="example"
            src={imgSrc}
            style={{ width: '130px', height: '130px', margin: '25px auto' }}
          />
        }
      >
        <div className={styles.cardContent} style={{ backgroundColor: color }}>
          <Meta title={title} description={description} />
          <div className={styles.cardFooter}>
            <p>{points} DTSU*</p>
            <div>
              <Link to={url}>
                <button className={styles.cardIcon}>
                  <ShareAltOutlined />
                </button>
              </Link>
              <button
                className={styles.cardIcon}
                onClick={() => cartCtx.addToCart(title, points, 1)}
              >
                <PlusOutlined />
              </button>
            </div>
          </div>
        </div>
      </Card>
    </Col>
  );
}

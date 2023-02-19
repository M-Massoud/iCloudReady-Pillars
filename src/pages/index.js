import React, { useState } from 'react';
import Layout from '../components/layout';
import * as styles from '../styles/home.module.css';
import { Link } from 'gatsby';
import { Row, Button, Popover } from 'antd';
import { MenuFoldOutlined, SettingOutlined } from '@ant-design/icons';

import PillarCard from '../components/PillarCard';

function Menu() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenuChange = newOpen => {
    setOpenMenu(newOpen);
  };
  return (
    <Popover
      content={[
        <p>
          <Link to="/about">About us page</Link>
        </p>,
        <p>
          <Link to="/faq">FAQs page</Link>
        </p>,
      ]}
      trigger="click"
      open={openMenu}
      onOpenChange={handleOpenMenuChange}
    >
      <Button className={styles.menuIcon}>
        <MenuFoldOutlined />
      </Button>
    </Popover>
  );
}

export default function Home() {
  return (
    <Layout>
      <div className={styles.pageHeader}>
        <h2 className="light-blue-text">Get Support</h2>
        <img src="../images/support-image.png" alt="support icon"></img>
        <Menu />
      </div>

      <Row>
        <PillarCard
          imgSrc="../images/Customer-Engagement.png"
          title="Customer Engagement"
          description="Get your own mobile app for industry specific"
          points="100"
          color="#0A488F"
          url="customer-engagement"
        />

        <PillarCard
          imgSrc="../images/Actionable-Insights.png"
          title="Actionable Insighets"
          description="Create Dashboards"
          points="100"
          color="#579064"
          url="actionable-insights"
        />

        <PillarCard
          imgSrc="../images/Employees-Productivity.png"
          title="Employees Productivity"
          description="KPI Builder , Work Conf, Create Oracle Requests"
          points="50"
          color="#950000"
          url="employees-productivity"
        />

        <PillarCard
          imgSrc="../images/Operations-Excellence.png"
          title="Operations Excellence"
          description="Tenant/lessee Managment"
          points="100"
          color="#8F6C0A"
          url="operations-excellence"
        />
      </Row>

      <div className={styles.pageFooter}>
        <SettingOutlined style={{ color: '#7AD676' }} />
        <p>Remaining DTSUs: 200</p>

        <SettingOutlined style={{ color: '#D84242' }} />

        <p>Remaining DTSUs: 350</p>
      </div>
    </Layout>
  );
}

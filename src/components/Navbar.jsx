import React, { useEffect, useState } from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import icons from '../images/cryptocurrency.png';

function Navbar() {
  const [active, setActive] = useState(true);
  const [screen, setScreen] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreen(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screen < 768) {
      setActive(false);
    } else {
      setActive(true);
    }
  }, [screen]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icons} size="small" />
        <Typography.Title level={4} className="logo">
          <Link to="/">Thopz</Link>
        </Typography.Title>
        <Button
          className="menu-control-container"
          onClick={() => setActive(!active)}
        >
          <MenuOutlined />
        </Button>
      </div>
      {active && (
        <Menu theme="dark">
          <Menu.Item icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <Link to="/cryptocurrencies">Cryptocurrency</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />}>
            <Link to="/exchanges">Exchanges</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />}>
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
}

export default Navbar;

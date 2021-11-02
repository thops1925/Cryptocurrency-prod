import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  MoneyCollectionOutlined,
  BulboutOutlined,
  FundOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import icons from '../images/cryptocurrency.png';

function Navbar() {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icons} size="large">
          <Typography.Title level={2} className="logo">
            <Link to="/">Cryptoverse</Link>
          </Typography.Title>
          {/* <Button></Button> */}
        </Avatar>
      </div>
    </div>
  );
}

export default Navbar;

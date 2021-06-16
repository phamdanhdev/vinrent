import React, { useState } from "react";
import { Drawer, Button, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import {
  DollarCircleOutlined,
  KeyOutlined,
  InfoCircleOutlined,
  PhoneOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import "./style.scss";
const { SubMenu } = Menu;
export default function AppHeader() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const scrollToEnd = () => {
    document
      .getElementById("root")
      .scrollIntoView({ behavior: "smooth", block: "end" });
  };

  const menuForRent = (
    <Menu>
      <Menu.Item key="0">
        <a href="#">Phòng Trọ</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="#">Căn Hộ</a>
      </Menu.Item>
      <Menu.Item key="2">
        <a>Nhà Ở</a>
      </Menu.Item>
      <Menu.Item key="3">
        <a>Văn Phòng</a>
      </Menu.Item>
      <Menu.Item key="4">
        <a>Nhà Xưởng</a>
      </Menu.Item>
      <Menu.Item key="4">
        <a>Đất</a>
      </Menu.Item>
    </Menu>
  );

  const menuForSale = (
    <Menu>
      <Menu.Item key="0">
        <a href="#">Đất</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="#">Nhà Ở</a>
      </Menu.Item>
      <Menu.Item key="2">
        <a>Căn Hộ</a>
      </Menu.Item>
      <Menu.Item key="3">
        <a>Nhà Xưởng</a>
      </Menu.Item>
    </Menu>
  );

  const menuForService = (
    <Menu>
      <Menu.Item key="0">
        <a href="#">Ký Gửi Bán</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="#">Hợp Tác Cho Thuê</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          {/* <i className="fas fa-home"></i> */}
          <a href=".">VinRent</a>
        </div>
        <div className="mobileHidden">
          <Dropdown overlay={menuForRent} trigger={["click"]}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              Cho Thuê <DownOutlined />
            </a>
          </Dropdown>
          <Dropdown overlay={menuForSale} trigger={["click"]}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              Đang Bán <DownOutlined />
            </a>
          </Dropdown>
          <Dropdown overlay={menuForService} trigger={["click"]}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              Dịch Vụ <DownOutlined />
            </a>
          </Dropdown>
          <a href="#about">Về Chúng Tôi</a>
          <a onClick={scrollToEnd}>Liên Hệ</a>
        </div>
        <div className="mobileVisible">
          <Button onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Menu style={{ width: 256 }} mode="inline">
              <SubMenu key="sub1" icon={<KeyOutlined />} title="Cho Thuê">
                <Menu.Item key="1">
                  <a>Phòng Trọ</a>
                </Menu.Item>
                <Menu.Item key="2">
                  <a>Căn Hộ</a>
                </Menu.Item>
                <Menu.Item key="3">
                  <a>Nhà Ở</a>
                </Menu.Item>
                <Menu.Item key="4">
                  <a>Văn Phòng</a>
                </Menu.Item>
                <Menu.Item key="5">
                  <a>Nhà Xưởng</a>
                </Menu.Item>
                <Menu.Item key="6">
                  <a>Đất</a>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                icon={<DollarCircleOutlined />}
                title="Đang Bán"
              >
                <Menu.Item key="7">
                  <a>Đất</a>
                </Menu.Item>
                <Menu.Item key="8">
                  <a>Nhà Ở</a>
                </Menu.Item>
                <Menu.Item key="9">
                  <a>Căn Hộ</a>
                </Menu.Item>
                <Menu.Item key="10">
                  <a>Nhà Xưởng</a>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub4" icon={<InfoCircleOutlined />} title="Dịch Vụ">
                <Menu.Item key="11">
                  <a>Ký Gửi Bán</a>
                </Menu.Item>
                <Menu.Item key="12">
                  <a>Hợp Tác Cho Thuê</a>
                </Menu.Item>
              </SubMenu>
              <Menu.Item icon={<TeamOutlined />}>
                <a href="#about">Về Chúng Tôi</a>
              </Menu.Item>
              <Menu.Item icon={<PhoneOutlined />}>
                <a onClick={scrollToEnd}>Liên Hệ</a>
              </Menu.Item>
            </Menu>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

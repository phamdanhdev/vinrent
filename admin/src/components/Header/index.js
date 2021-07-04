import "./style.scss";
import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
const { Header } = Layout;

export default function AppDashboardHeader() {
  return (
    <div>
      <Header className="header">
        <div className="logo">
          <a href=".">VinRent</a>
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to={"/"}>Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to={"/contact"}>Liên Hệ</Link>
          </Menu.Item>
        </Menu>
      </Header>
    </div>
  );
}

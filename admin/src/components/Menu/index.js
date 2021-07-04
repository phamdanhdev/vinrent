import React from "react";
import { Layout, Menu } from "antd";
import { AppstoreAddOutlined, AreaChartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const { SubMenu } = Menu;
const { Sider } = Layout;

export default function AppMenu() {
  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        theme="dark"
        mode="inline"
        style={{ height: "100%", borderRight: 0 }}
      >
        <SubMenu key="sub2" icon={<AreaChartOutlined />} title="Thống Kê">
          <Menu.Item key="5">Biểu Đồ</Menu.Item>
        </SubMenu>
        <SubMenu key="sub1" icon={<AppstoreAddOutlined />} title="Sản Phẩm">
          <Menu.Item key="1">
            <Link to={"/product"}>Danh Sách</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to={"/product/hide"}>Sản Phẩm Ẩn</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}

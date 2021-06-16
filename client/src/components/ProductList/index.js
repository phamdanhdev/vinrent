import React from "react";
import "./style.scss";
import AppProductItem from "./ProductItem";
import { Row, Col } from "antd";

export default function AppProductList() {
  return (
    <div className="productList">
      <Row>
        <Col xs={24} sm={24} md={12} lg={6}>
          <AppProductItem />
        </Col>
        <Col xs={24} sm={24} md={12} lg={6}>
          <AppProductItem />
        </Col>
        <Col xs={24} sm={24} md={12} lg={6}>
          <AppProductItem />
        </Col>
        <Col xs={24} sm={24} md={12} lg={6}>
          <AppProductItem />
        </Col>
      </Row>
    </div>
  );
}

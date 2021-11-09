import React from "react";
import "./style.scss";
import AppProductItem from "./ProductItem";
import { Row, Col } from "antd";

export default function AppProductList(productData) {
  return (
    <div className="productList">
      <Row>
        {!productData ? (
          <p>Không có sản phẩm</p>
        ) : (
          productData.map((e) => (
            <Col xs={24} sm={24} md={12} lg={6}>
              <AppProductItem product={e} />
            </Col>
          ))
        )}
      </Row>
    </div>
  );
}

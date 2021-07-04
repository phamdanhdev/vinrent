import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import AppFilter from "../../../components/FilterTools";
import AppProductList from "../../../components/ProductList";

export default function AppProductPage() {
  return (
    <div>
      <AppFilter />
      <Link to={"/product/1"}>
        <Button style={{ height: "40px", marginLeft: "20px" }} type="primary">
          Thêm Sản Phẩm Mới
        </Button>
      </Link>
      <AppProductList />
    </div>
  );
}

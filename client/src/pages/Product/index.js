import React from "react";
import "./style.scss";
import AppProductList from "../../components/ProductList";
import AppSearchTools from "../../components/SearchTools";

export default function AppProductPage() {
  return (
    <div className="product-page">
      <AppSearchTools />
      <AppProductList />
    </div>
  );
}

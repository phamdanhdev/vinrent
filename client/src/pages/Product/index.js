import React, { useEffect } from "react";
import "./style.scss";
import AppProductList from "../../components/ProductList";
import AppSearchTools from "../../components/SearchTools";
import { useSelector } from "react-redux";

export default function AppProductPage() {
  const productData = useSelector((state) => state.product);
  useEffect(() => {
    console.log(productData);
  }, [productData]);
  return (
    <div className="product-page">
      <AppSearchTools />
      <AppProductList productData />
    </div>
  );
}

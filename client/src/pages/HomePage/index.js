import React from "react";
import AppProductList from "../../components/ProductList";
import AppAboutUs from "./components/AboutUs";
import AppCarousel from "./components/Carousel";
import "./style.scss";

export default function AppHome() {
  return (
    <div>
      <AppCarousel />
      <div className="homePage_product">
        <div className="homePage_product_row">
          <div className="homePage_product_row_label">Đang Bán</div>
          <AppProductList />
          <div className="homePage_product_row_btnMore">
            <a>
              Xem Thêm <i class="fas fa-chevron-circle-right"></i>
            </a>
          </div>
        </div>
        <div className="homePage_product_row">
          <div className="homePage_product_row_label">Đang Cho Thuê</div>
          <AppProductList />
          <div className="homePage_product_row_btnMore">
            <a>
              Xem Thêm <i class="fas fa-chevron-circle-right"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="homePage_aboutUs">
        <AppAboutUs />
      </div>
    </div>
  );
}

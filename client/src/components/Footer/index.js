import React from "react";
import "./style.scss";

export default function AppFooter() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="f-item f-left">
          <h1>VinRent</h1>
          <p>
            <i class="fas fa-map-marker-alt"></i>145 Đường Thạnh Lộc 27, P.Thạnh
            Lộc, Quận 12, TP.HCM
          </p>
        </div>
        <div className="f-item f-center">
          <h2>Liên Hệ</h2>
          <p>Hotline: 08.98.08.2836</p>
          <p>Email: phamdanh.dev@gmail.com</p>
        </div>
        <div className="f-item f-right">
          <h2>Mạng Xã Hội</h2>
          <i class="fab fa-facebook-square"></i>
          <i class="fab fa-instagram-square"></i>
          <i class="fab fa-youtube-square"></i>
        </div>
      </div>
    </div>
  );
}

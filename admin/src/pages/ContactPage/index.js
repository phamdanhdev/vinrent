import React from "react";
import "./style.scss";
import danhava from "../../assets/img/danh.jpg";

export default function AppContactPage() {
  return (
    <div>
      <div className="contact-page">
        <div className="image">
          <img src={danhava} alt="danh" />
        </div>
        <div className="content">
          <div>
            <div className="aboutUs-content-header">
              <h2>
                Xin chào!
                <br />
                Mình là Danh Phạm
              </h2>
            </div>
            <div className="aboutUs-content-body">
              <p>
                Công việc chính của mình là Lập Trình Viên (Web Developer). Tuy
                nhiên mình có một niềm đam mê mãnh liệt với bất động sản (BĐS).
              </p>
              <p>
                Mình luôn có một nỗi niềm trăn trở rằng: "Làm cách nào để có thể
                áp dụng CNTT vào BĐS để mang lại hiệu quả và lợi ích cao
                nhất?!". Và đó là lý do <span>VinRent</span> ra đời!
              </p>
              <p>
                Các đội nhóm của <span>VinRent</span> chăm chỉ tìm kiếm, thu
                thập từ các khu vực, không ngại nắng mưa để được làm việc với
                chính chủ. Chính vì vậy, sản phẩm BĐS của <span>VinRent</span>{" "}
                luôn có được giá tốt và pháp lý rõ ràng, bảo vệ người mua với
                lợi ích cao nhất!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-info">
        <h1>VinRent</h1>
        <h2>Hotline: 08.9808.2836</h2>
        <h2>145 Đường Thạnh Lộc 27, P.Thạnh Lộc, Quận 12, TP.HCM</h2>
      </div>
    </div>
  );
}

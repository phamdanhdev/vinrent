import React from "react";
import image from "../../../assets/images/carousel/nha1.jpg";
import image2 from "../../../assets/images/carousel/nha2.jpeg";
import "./style.scss";
import { Badge, Tag } from "antd";

export default function AppProductItem(product) {
  return (
    <div className="productItem">
      <div className="productItem_img">
        <div>
          <Badge count={6} />
          <img src={image} alt="hinh_nha" />
        </div>
      </div>
      <div className="productItem_content">
        <div className="productItem_header">
          <div className="productItem_address">
            <Tag color="#108ee9">{product.province}</Tag>
            <Tag color="#f50">Quận 12</Tag>
            <Tag color="#87d068">Cho Thuê</Tag>
            <Tag color="#2db7f5">Mã: B032</Tag>
          </div>
          <div className="productItem_name">
            Nhà 150m2 Đường 4m Sổ Hồng Riêng
          </div>
        </div>
        <div className="productItem_body">
          <div className="productItem_util">
            <i class="fas fa-bed"></i>4 Phòng
          </div>
          <div className="productItem_util">
            <i class="fas fa-bath"></i>3 WC
          </div>
          <div className="productItem_util">
            <i class="fas fa-expand-arrows-alt"></i>150 m2
          </div>
          <div className="productItem_util">
            <i class="fas fa-road"></i>Đường 4m
          </div>
          <div className="productItem_util">
            <i class="far fa-file-alt"></i>SHR
          </div>
          <div className="productItem_util">
            <i class="far fa-compass"></i>Đông Bắc
          </div>
        </div>
        <div className="productItem_footer">
          <div className="productItem_price">
            <i class="fas fa-tag"></i>1,2 Tỷ
          </div>
          <div className="productItem_visited">
            <i class="fas fa-eye"></i>76 Lượt Xem
          </div>
        </div>
      </div>
    </div>
  );
}

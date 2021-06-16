import React from "react";
import { Image, Carousel, Row, Col, Tag } from "antd";
import "./style.scss";
import hinh1 from "../../assets/images/carousel/nha1.jpg";
import hinh3 from "../../assets/images/carousel/nha3.jpg";
import danhimg from "../../assets/images/review/danh.jpg";

export default function AppProductDetail() {
  return (
    <div className="productDetail">
      <div className="pd-container">
        <div className="pdBack">
          <a href="#">
            <i class="fas fa-arrow-left"></i>
            <span>Trở về</span>
          </a>
        </div>
        <Row>
          <Col xs={24} sm={24} md={24} lg={16} xl={16}>
            <div className="pdContent">
              <div className="pdCarousel">
                <Image.PreviewGroup>
                  <Carousel arrows>
                    <Image src={hinh1} />
                    <Image src={hinh3} />
                  </Carousel>
                </Image.PreviewGroup>
              </div>
              <div className="pdContent-container">
                <div className="pdTag">
                  <Tag color="#108ee9">TP.HCM</Tag>
                  <Tag color="#f50">Quận 12</Tag>
                  <Tag color="#87d068">Cho Thuê</Tag>
                  <Tag color="#2db7f5">Mã: B032</Tag>
                </div>
                <div className="pdName">
                  <h1>Nhà 150m2 Đường 4m Sổ Hồng Riêng</h1>
                </div>
                <div className="pdUtility">
                  <div className="pdUtil">
                    <i class="fas fa-bed"></i>4 Phòng
                  </div>
                  <div className="pdUtil">
                    <i class="fas fa-bath"></i>3 WC
                  </div>
                  <div className="pdUtil">
                    <i class="fas fa-expand-arrows-alt"></i>150 m2
                  </div>
                  <div className="pdUtil">
                    <i class="fas fa-road"></i>Đường 4m
                  </div>
                  <div className="pdUtil">
                    <i class="far fa-file-alt"></i>SHR
                  </div>
                  <div className="pdUtil">
                    <i class="far fa-compass"></i>Đông Bắc
                  </div>
                </div>
                <div className="pdPriceWrapper">
                  <div className="pdPrice">
                    <i class="fas fa-tag"></i>1,2 Tỷ
                  </div>
                  <div className="pdVisited">
                    <i class="fas fa-eye"></i>76 Lượt Xem
                  </div>
                </div>
                <div className="pdDescription">
                  <h2>Thông tin chi tiết</h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dicta autem reiciendis ex sed a iure at. Sequi temporibus
                    ducimus alias est doloremque amet repellendus voluptates
                    aperiam fugit? Et sed nostrum asperiores perferendis fuga,
                    quo mollitia pariatur aut dignissimos non ipsum quaerat
                    neque? Fugiat similique quam voluptates maxime incidunt
                    architecto quae placeat illo sequi, mollitia ducimus.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <div className="pdContact">
              <div className="pdContactWrapper">
                <div className="pdContact-img">
                  <img src={danhimg} alt="danh" />
                  <h2>Phạm Danh</h2>
                </div>
                <div className="pdContact-phone">
                  <a href="tel:0898082836">
                    <i class="fas fa-phone-volume"></i>
                    <span>08 9808 2836</span>
                  </a>
                </div>
                <div className="pdContact-zalo">
                  <a href="tel:0898082836">Zalo: 08 9808 2836</a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

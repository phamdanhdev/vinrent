import React from "react";
import { Carousel } from "antd";
import "./style.scss";
import nha1 from "../../../../assets/images/carousel/nha1.jpg";
import nha2 from "../../../../assets/images/carousel/nha2.jpeg";
import nha3 from "../../../../assets/images/carousel/nha3.jpg";
import nha4 from "../../../../assets/images/carousel/nha4.jpg";
import AppSearchTools from "../../../../components/SearchTools";

const AppCarousel = React.memo(() => {
  return (
    <div className='myAppCarousel' style={{ position: "relative" }}>
      <Carousel autoplay dotPosition={"top"}>
        <div>
          <div className="overlay">
            <div className="overlay-content">
              <h1>Mua nhà chính chủ, quá dễ!</h1>
              <p>
                Các CTV của VinRent chuyên sưu tầm các BDS chính chủ với giá cực
                tốt! <i class="fas fa-chevron-circle-right"></i>
              </p>
            </div>
          </div>
          <img src={nha3} alt="nha" />
        </div>
        <div>
          <div className="overlay">
            <div className="overlay-content">
              <h1>Thuê nhà giá tốt, có ngay!</h1>
              <p>
                Rất nhiều nhà và phòng trọ chính chủ ký gửi, hãy tìm 1 căn phù
                hợp nào! <i class="fas fa-chevron-circle-right"></i>
              </p>
            </div>
          </div>
          <img src={nha3} alt="nha" />
        </div>
      </Carousel>
      <AppSearchTools />
    </div>
  );
});

export default AppCarousel;

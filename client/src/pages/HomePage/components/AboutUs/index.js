import React from "react";
import "./style.scss";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import myPersonImg from "../../../../assets/images/carousel/nha1.jpg";
import cuong from "../../../../assets/images/review/cuong.jpg";
import dung from "../../../../assets/images/review/dung.jpg";
import danh from "../../../../assets/images/review/danh.jpg";
import { Rate } from "antd";

export default function AppAboutUs() {
  return (
    <>
      <div id="about" className="aboutUs">
        <div className="aboutUs-title">
          <h1>Về Chúng Tôi</h1>
        </div>
        <div className="aboutUs-container">
          <div className="aboutUs-img">
            <img src={danh} alt="DanhPhamImg" />
          </div>
          <div className="aboutUs-content">
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
      <div className="expInfo">
        <h2>Thành Tích</h2>
        <div className="expInfo-container">
          <div className="expInfo-item">
            <div className="expInfo-item-num">
              <CountUp end={3} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </div>
            <div className="expInfo-item-txt">Năm Hoạt Động</div>
          </div>
          <div className="expInfo-item">
            <div className="expInfo-item-num">
              <CountUp end={15} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </div>
            <div className="expInfo-item-txt">Cộng Tác Viên</div>
          </div>
          <div className="expInfo-item">
            <div className="expInfo-item-num">
              <CountUp end={45} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </div>
            <div className="expInfo-item-txt">Giao Dịch</div>
          </div>
          <div className="expInfo-item">
            <div className="expInfo-item-num">
              <CountUp end={82} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </div>
            <div className="expInfo-item-txt">Khách Hàng</div>
          </div>
        </div>
      </div>
      <div className="comment">
        <h2>Reviews</h2>
        <div className="comment-container">
          <div className="comment-item">
            <div className="cmt-item-actor">
              <img src={cuong} alt="user" />
              <div className="cmt-item-actor-detail">
                <h3>Cuong Tran</h3>
                <div className="rating">
                  <h1>5.0</h1>
                  <Rate disabled defaultValue={5} />
                </div>
              </div>
            </div>
            <div className="cmt-item-review">
              <p>
                Các bạn bên Vinrent rất nhiệt tình giúp đỡ mình trong các thủ
                tục, đất Vinrent cung cấp giá rất mềm trong khu vực, đặc biệt là
                mình được làm việc với chính chủ. Rất hài lòng!
              </p>
            </div>
          </div>
          <div className="comment-item">
            <div className="cmt-item-actor">
              <img src={dung} alt="user" />
              <div className="cmt-item-actor-detail">
                <h3>Phuong Dung</h3>
                <div className="rating">
                  <h1>5.0</h1>
                  <Rate disabled defaultValue={5} />
                </div>
              </div>
            </div>
            <div className="cmt-item-review">
              <p>
                Vì công việc rất bận nên không có thời gian tìm nhà để thuê, rất
                may mắn mình được giới thiệu và tìm đến Vinrent. Các bạn hỗ trợ
                rất tận tình, mình rất ưng ý với căn nhà đang thuê.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

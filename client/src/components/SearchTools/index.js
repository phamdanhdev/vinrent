import React, { useState } from "react";
import "./style.scss";
import { Modal, Button, Cascader, Input } from "antd";
import { FilterOutlined, SearchOutlined } from "@ant-design/icons";
const { Search } = Input;

export default function AppSearchTools() {
  const optionsLoaiDichVu = [
    {
      value: "ChoThue",
      label: "Cho Thuê",
      children: [
        {
          value: "PhongTro",
          label: "Phòng Trọ",
        },
        {
          value: "CanHo",
          label: "Căn Hộ",
        },
        {
          value: "NhaO",
          label: "Nhà Ở",
        },
        {
          value: "VanPhong",
          label: "Văn Phòng",
        },
        {
          value: "NhaXuong",
          label: "Nhà Xưởng",
        },
        {
          value: "Dat",
          label: "Đất",
        },
      ],
    },
    {
      value: "DangBan",
      label: "Đang Bán",
      children: [
        {
          value: "Dat",
          label: "Đất",
        },
        {
          value: "NhaO",
          label: "Nhà Ở",
        },
        {
          value: "CanHo",
          label: "Căn Hộ",
        },
        {
          value: "NhaXuong",
          label: "Nhà Xưởng",
        },
      ],
    },
  ];

  const optionsKhuVuc = [
    {
      value: "TPHCM",
      label: "TP.HCM",
      children: [
        {
          value: "GoVap",
          label: "Gò Vấp",
        },
        {
          value: "Quan12",
          label: "Quận 12",
        },
        {
          value: "TanBinh",
          label: "Tân Bình",
        },
        {
          value: "BinhThanh",
          label: "Bình Thạnh",
        },
      ],
    },
    {
      value: "DongNai",
      label: "Đồng Nai",
      children: [
        {
          value: "TrangBom",
          label: "Trảng Bom",
        },
        {
          value: "VinhCuu",
          label: "Vĩnh Cửu",
        },
        {
          value: "LongThanh",
          label: "Long Thành",
        },
        {
          value: "TPBienHoa",
          label: "TP.Biên Hoà",
        },
      ],
    },
  ];

  const optionsFilter = [
    {
      value: "TinMoi",
      label: "Tin Mới Trước",
    },
    {
      value: "GiaThap",
      label: "Giá Thấp Trước",
    },
  ];

  function onChangeLoaiDichVu(value) {
    console.log(value);
  }

  function onChangeKhuVuc(value) {
    console.log(value);
  }

  function onChangeFilter(value) {
    console.log(value);
  }

  function onClickFilter() {
    console.log("onClickFilter");
  }

  function onClickSearch(value) {
    console.log(value);
  }

  //FILTER MODEL

  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);

  const showFilterModal = () => {
    setIsFilterModalVisible(true);
  };

  const handleOkFilterModal = () => {
    setIsFilterModalVisible(false);
  };

  const handleCancelFilterModal = () => {
    setIsFilterModalVisible(false);
  };

  //SEARCH MODEL

  const [isSearchModalVisible, setIsSearchModalVisible] = useState(false);

  const showSearchModal = () => {
    setIsSearchModalVisible(true);
  };

  const handleOkSearchModal = () => {
    setIsSearchModalVisible(false);
  };

  const handleCancelSearchModal = () => {
    setIsSearchModalVisible(false);
  };

  return (
    <>
      <div className="searchTools mobileHidden">
        <div className="searchToolsItem">
          <Cascader
            className="searchToolsItem_Cascader"
            options={optionsLoaiDichVu}
            onChange={onChangeLoaiDichVu}
            placeholder="Loại"
          />
        </div>
        <div className="searchToolsItem">
          <Cascader
            className="searchToolsItem_Cascader cascaderBorder"
            options={optionsKhuVuc}
            onChange={onChangeKhuVuc}
            placeholder="Khu Vực"
          />
        </div>
        <div className="searchToolsItem">
          <Cascader
            className="searchToolsItem_Cascader cascaderBorder"
            options={optionsFilter}
            onChange={onChangeFilter}
            placeholder="Lọc"
          />
        </div>
        <div className="searchToolsItem">
          <button onClick={onClickFilter} className="searchToolsItem_Button">
            Tìm Ngay!
          </button>
        </div>
        <div className="searchToolsItem myFont">Hoặc</div>
        <div className="searchToolsItem">
          <Search
            className="searchToolsItem_Search"
            placeholder="Tìm Theo Mã ..."
            allowClear
            enterButton="Tìm"
            size="large"
            onSearch={onClickSearch}
          />
        </div>
      </div>
      <div className="searchToolsMobile mobileVisible">
        <div className="searchToolsMobile_Filter">
          <Button
            type="primary"
            onClick={showFilterModal}
            className="searchToolsMobile_BigButton"
          >
            <FilterOutlined />
            Lọc
          </Button>
          <Modal
            className="searchToolsMobile_Modal searchToolsMobile_ModalFilter"
            title="Lọc"
            visible={isFilterModalVisible}
            cancelText="Đóng"
            okText="Tìm Ngay"
            onOk={handleOkFilterModal}
            onCancel={handleCancelFilterModal}
          >
            <div className="searchToolsMobile_Modal_Body">
              <div className="searchToolsItem_Mobile">
                <Cascader
                  size="large"
                  className="searchToolsItem_CascaderMobile"
                  options={optionsLoaiDichVu}
                  onChange={onChangeLoaiDichVu}
                  placeholder="Loại"
                />
              </div>
              <div className="searchToolsItem_Mobile">
                <Cascader
                  size="large"
                  className="searchToolsItem_CascaderMobile"
                  options={optionsKhuVuc}
                  onChange={onChangeKhuVuc}
                  placeholder="Khu Vực"
                />
              </div>
              <div className="searchToolsItem_Mobile">
                <Cascader
                  size="large"
                  className="searchToolsItem_CascaderMobile"
                  options={optionsFilter}
                  onChange={onChangeFilter}
                  placeholder="Lọc"
                />
              </div>
            </div>
          </Modal>
        </div>
        <div className="searchToolsMobile_Search">
          <Button
            type="primary"
            onClick={showSearchModal}
            className="searchToolsMobile_BigButton"
          >
            <SearchOutlined />
            Tìm Theo Mã
          </Button>
          <Modal
            className="searchToolsMobile_Modal searchToolsMobile_ModalSearch"
            title="Tìm Theo Mã"
            cancelText="Đóng"
            okText="Tìm Ngay"
            visible={isSearchModalVisible}
            onOk={handleOkSearchModal}
            onCancel={handleCancelSearchModal}
          >
            <Search
              placeholder="Nhập Mã Sản Phẩm"
              allowClear
              onSearch={onClickSearch}
            />
          </Modal>
        </div>
      </div>
    </>
  );
}

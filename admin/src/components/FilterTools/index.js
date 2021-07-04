import React from "react";
import "./style.scss";
import { Button, Cascader, Input } from "antd";
const { Search } = Input;

export default function AppFilter() {
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

  return (
    <div className="searchTools">
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
        <Button
          type="primary"
          onClick={onClickFilter}
          className="searchToolsItem_Button"
        >
          Tìm Ngay!
        </Button>
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
  );
}

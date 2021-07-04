import React from "react";
import { Table, Tag, Space } from "antd";

export default function AppProductList() {
  const columns = [
    {
      title: "STT",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Mã",
      dataIndex: "ma",
      key: "ma",
      render: (text) => <Tag color="green">{text}</Tag>,
    },
    {
      title: "Loại",
      dataIndex: "loai",
      key: "loai",
      render: (text) => (
        <>
          {text.map((txt) => {
            let color =
              txt === "ChoThue" ? "red" : txt === "DangBan" ? "blue" : "yellow";
            return (
              <Tag key={txt} color={color}>
                {txt}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Tiêu Đề",
      dataIndex: "tieude",
      key: "tieude",
    },
    {
      title: "Khu Vực",
      key: "khuvuc",
      dataIndex: "khuvuc",
      render: (khuvuc) => <span>{khuvuc[1]}</span>,
    },
    {
      title: "#",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a>Chi Tiết</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      ma: "John Brown",
      loai: ["ChoThue", "PhongTro"],
      tieude: "Nhà 300m2 mặt tiền đường 8m SHR 1T4L",
      khuvuc: ["TPHCM", "Quan12"],
    },
    {
      key: "2",
      ma: "Jim Green",
      loai: ["DangBan", "PhongTro"],
      tieude: "Nhà 300m2 mặt tiền đường 8m SHR 1T4L",
      khuvuc: ["TPHCM", "Quan12"],
    },
    {
      key: "3",
      ma: "Joe Black",
      loai: ["ChoThue", "PhongTro"],
      tieude: "Nhà 300m2 mặt tiền đường 8m SHR 1T4L",
      khuvuc: ["TPHCM", "Quan12"],
    },
    {
      key: "4",
      ma: "John Brown",
      loai: ["ChoThue", "PhongTro"],
      tieude: "Nhà 300m2 mặt tiền đường 8m SHR 1T4L",
      khuvuc: ["TPHCM", "Quan12"],
    },
    {
      key: "5",
      ma: "Jim Green",
      loai: ["DangBan", "PhongTro"],
      tieude: "Nhà 300m2 mặt tiền đường 8m SHR 1T4L",
      khuvuc: ["TPHCM", "Quan12"],
    },
    {
      key: "6",
      ma: "Joe Black",
      loai: ["ChoThue", "PhongTro"],
      tieude: "Nhà 300m2 mặt tiền đường 8m SHR 1T4L",
      khuvuc: ["TPHCM", "Quan12"],
    },
    {
      key: "7",
      ma: "John Brown",
      loai: ["ChoThue", "PhongTro"],
      tieude: "Nhà 300m2 mặt tiền đường 8m SHR 1T4L",
      khuvuc: ["TPHCM", "Quan12"],
    },
    {
      key: "8",
      ma: "Jim Green",
      loai: ["DangBan", "PhongTro"],
      tieude: "Nhà 300m2 mặt tiền đường 8m SHR 1T4L",
      khuvuc: ["TPHCM", "Quan12"],
    },
    {
      key: "9",
      ma: "Joe Black",
      loai: ["ChoThue", "PhongTro"],
      tieude: "Nhà 300m2 mặt tiền đường 8m SHR 1T4L",
      khuvuc: ["TPHCM", "Quan12"],
    },
    {
      key: "10",
      ma: "John Brown",
      loai: ["ChoThue", "PhongTro"],
      tieude: "Nhà 300m2 mặt tiền đường 8m SHR 1T4L",
      khuvuc: ["TPHCM", "Quan12"],
    },
    {
      key: "11",
      ma: "Jim Green",
      loai: ["DangBan", "PhongTro"],
      tieude: "Nhà 300m2 mặt tiền đường 8m SHR 1T4L",
      khuvuc: ["TPHCM", "Quan12"],
    },
    {
      key: "12",
      ma: "Joe Black",
      loai: ["ChoThue", "PhongTro"],
      tieude: "Nhà 300m2 mặt tiền đường 8m SHR 1T4L",
      khuvuc: ["TPHCM", "Quan12"],
    },
    {
      key: "13",
      ma: "John Brown",
      loai: ["ChoThue", "PhongTro"],
      tieude: "Nhà 300m2 mặt tiền đường 8m SHR 1T4L",
      khuvuc: ["TPHCM", "Quan12"],
    },
    {
      key: "14",
      ma: "Jim Green",
      loai: ["DangBan", "PhongTro"],
      tieude: "Nhà 300m2 mặt tiền đường 8m SHR 1T4L",
      khuvuc: ["TPHCM", "Quan12"],
    },
    {
      key: "15",
      ma: "Joe Black",
      loai: ["ChoThue", "PhongTro"],
      tieude: "Nhà 300m2 mặt tiền đường 8m SHR 1T4L",
      khuvuc: ["TPHCM", "Quan12"],
    },
  ];

  return (
    <div style={{ padding: "20px", backgroundColor: "white" }}>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{
          defaultPageSize: 8,
        }}
      />
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function OtherPage() {
  return (
    <div
      className="not-found"
      style={{
        textAlign: "center",
        height: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <p>Ký gửi hoặc hợp tác, vui lòng liên hệ</p>
      <h2>08.98.08.2836</h2>
      <Link to="/">Back to Homepage</Link>
    </div>
  );
}

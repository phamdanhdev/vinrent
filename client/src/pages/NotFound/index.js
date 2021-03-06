import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
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
      <h2>Sorry ...</h2>
      <p>That page can be found!</p>
      <Link to="/">Back to Homepage</Link>
    </div>
  );
}

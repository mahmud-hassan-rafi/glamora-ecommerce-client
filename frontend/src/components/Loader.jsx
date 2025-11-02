import React from "react";
import "../App.css";

const Loader = () => {
  return (
    <div className="loader">
      <div
        className="spinner-border"
        style={{ width: "2rem", height: "2rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;

import React from "react";
import "./Header.css";

function Header() {
  return (
    <div
      className="header"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        // display: "flex",
        // //justifyContent: "space-between",
        // alignItems: "left",
        padding: "0px",
        backgroundColor: "#fff",
        paddingTop: "0px",
      }}
    >
      <div
        className="header-title"
        style={{ fontWeight: "bold", fontSize: "36px" }}
      >
        CARDIOGRAM
        <div
          className="header-buttons"
          style={{ display: "flex", gap: "0px", fontSize: "14px" }}
        >
          <div
            className="header-button-primary"
            style={{
              backgroundColor: "#282828",
              color: "white",
              padding: "8px 24px",
              textAlign: "left",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            <div>Jaagrav Seal</div>
            <div style={{ fontSize: "10px", marginTop: "2px" }}>USR004</div>
          </div>
          <div
            className="header-button-secondary"
            style={{
              backgroundColor: "white",
              padding: "8px 24px",
              borderRadius: "5px",
              textAlign: "left",
              fontSize: "14px",
              fontWeight: "500",
              border: "1px solid #ccc",
            }}
          >
            <div>Session UUID</div>
            <div style={{ fontSize: "10px", marginTop: "2px" }}>
              22 Jan, 2025 | 20:46
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

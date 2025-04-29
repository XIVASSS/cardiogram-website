function QRSComplex() {
  return (
    <div
      style={{
        //backgroundColor: "#333",
        borderRadius: "5px",
        width: "100%",
        boxSizing: "border-box",
        fontFamily: "Arial, sans-serif",
        color: "#fff",
      }}
    >
      <div
        style={{
          fontSize: "18px",
          color: "#888",
          marginTop: "10px",
        }}
      >
        QRS Complex
      </div>
      <div
        style={{
          fontSize: "48px",
          fontWeight: "bold",
          color: "#fff",
          marginBottom: "10px",
          marginTop: "120px",
        }}
      >
        90{" "}
        <span style={{ fontSize: "12px", fontWeight: "lighter" }}>avg BPM</span>
      </div>
      <div
        style={{
          fontSize: "14px",
          color: "#ddd",
          marginTop: "20px",
        }}
      >
        this is the description placeholder for this tab about theis specific
        tab.
      </div>
    </div>
  );
}

export default QRSComplex;

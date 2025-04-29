function PRInterval() {
  return (
    <div
      style={{
        padding: "20px",

        width: "100%",
        boxSizing: "border-box",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          fontSize: "48px",
          fontWeight: "bold",
          color: "#000",
          marginBottom: "10px",
        }}
      >
        70%
      </div>
      <div
        style={{
          width: "100%",
          backgroundColor: "#e0e0e0",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "70%",
            height: "20px",
            backgroundColor: "#555",
            borderRadius: "10px",
          }}
        ></div>
      </div>
      <div
        style={{
          fontSize: "18px",
          color: "#888",
          marginTop: "10px",
        }}
      >
        PR Interval
      </div>
      <div
        style={{
          fontSize: "14px",
          color: "#999",
          marginTop: "80px",
        }}
      >
        this is the description placeholder for this tab about theis specific
        tab.
      </div>
    </div>
  );
}

export default PRInterval;

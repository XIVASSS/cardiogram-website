import React from "react";

function RRInterval() {
  const styles = {
    container: {
      padding: "20px",
      borderRadius: "8px",
      textAlign: "left",
      fontFamily: "Arial, sans-serif",
    },
    title: {
      color: "#888",
      fontSize: "18px",
      marginBottom: "110px",
      textAlign: "left",
    },
    value: {
      fontSize: "48px",
      fontWeight: "bold",
      color: "#000",
      marginBottom: "10px",
    },
    unit: {
      fontSize: "24px",
      fontWeight: "normal",
      color: "#888",
      marginLeft: "5px",
    },
    description: {
      color: "#888",
      fontSize: "14px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.title}>Heart Rate</div>
      <div style={styles.value}>
        118 <span style={styles.unit}>avg BPM</span>
      </div>
      <div style={styles.description}>
        this is the description placeholder for this tab about this specific
        tab.
      </div>
    </div>
  );
}

export default RRInterval;

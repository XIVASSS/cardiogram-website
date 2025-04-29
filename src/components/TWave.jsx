import { useState, useEffect } from "react";

function TWave() {
  const systoleValue = 140;
  const systoleMinValue = 90;
  const systoleMaxValue = 180;

  const diastoleValue = 85;
  const diastoleMinValue = 60;
  const diastoleMaxValue = 120;

  const width = 300;
  const height = 220;
  const centerX = width / 2;
  const centerY = height - 40;
  const radius = 140;
  const arcWidth = 25;

  const startAngle = Math.PI;
  const endAngle = 0;
  const totalAngleRad = Math.PI;

  const generateArc = (start, end, rad) => {
    const startX = centerX + Math.cos(start) * rad;
    const startY = centerY - Math.sin(start) * rad;
    const endX = centerX + Math.cos(end) * rad;
    const endY = centerY - Math.sin(end) * rad;

    const largeArcFlag = Math.abs(end - start) > Math.PI ? 1 : 0;

    return `M ${startX} ${startY} A ${rad} ${rad} 0 ${largeArcFlag} 1 ${endX} ${endY}`;
  };

  const systoleStartValue = systoleMinValue;
  const systoleEndValue = systoleValue;
  const systoleStartRatio =
    (systoleStartValue - systoleMinValue) / (systoleMaxValue - systoleMinValue);
  const systoleEndRatio =
    (systoleEndValue - systoleMinValue) / (systoleMaxValue - systoleMinValue);
  const systoleStartAngle = startAngle - systoleStartRatio * totalAngleRad;
  const systoleEndAngle = startAngle - systoleEndRatio * totalAngleRad;
  const systoleArcPath = generateArc(
    systoleStartAngle,
    systoleEndAngle,
    radius
  );

  const diastoleStartValue = diastoleMinValue;
  const diastoleEndValue = diastoleValue;
  const diastoleStartRatio =
    (diastoleStartValue - diastoleMinValue) /
    (diastoleMaxValue - diastoleMinValue);
  const diastoleEndRatio =
    (diastoleEndValue - diastoleMinValue) /
    (diastoleMaxValue - diastoleMinValue);
  const diastoleStartAngle = startAngle - diastoleStartRatio * totalAngleRad;
  const diastoleEndAngle = startAngle - diastoleEndRatio * totalAngleRad;
  const diastoleArcPath = generateArc(
    diastoleStartAngle,
    diastoleEndAngle,
    radius
  );

  const styles = {
    wrapper: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      maxWidth: "400px",
      margin: "0 auto",
    },
    diastoleContainer: {
      marginTop: "24px",
    },
    gaugeContainer: {
      position: "relative",
      width: "100%",
    },
    textContainer: {
      textAlign: "center",
      marginTop: "10px",
    },
    title: {
      fontSize: "18px",
      fontWeight: 600,
      color: "#333",
    },
    description: {
      fontSize: "14px",
      color: "#666",
      marginTop: "5px",
    },
    arcBlue: {
      stroke: "#30b6d9",
      strokeWidth: arcWidth,
      fill: "none",
    },
    arcGreen: {
      stroke: "#4caf50",
      strokeWidth: arcWidth,
      fill: "none",
    },
    value: {
      fontSize: "24px",
      fontWeight: "bold",
      fill: "#333",
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <div style={styles.gaugeContainer}>
          <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
            <path d={systoleArcPath} style={styles.arcBlue} />

            <text
              x={centerX}
              y={centerY - 20}
              textAnchor="middle"
              dominantBaseline="middle"
              style={styles.value}
            >
              {systoleValue}
            </text>
          </svg>
        </div>

        {/* Label text */}
        <div style={styles.textContainer}>
          <div style={styles.title}>Avg Systole</div>
          <p style={styles.description}>
            Avg Systole: Ideally 110–120 mmHg, with values &gt;140 mmHg
            indicating hypertension and &lt;90 mmHg indicating hypotension.
          </p>
        </div>
      </div>

      <div style={{ ...styles.container, ...styles.diastoleContainer }}>
        <div style={styles.gaugeContainer}>
          <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
            <path d={diastoleArcPath} style={styles.arcGreen} />

            <text
              x={centerX}
              y={centerY - 20}
              textAnchor="middle"
              dominantBaseline="middle"
              style={styles.value}
            >
              {diastoleValue}
            </text>
          </svg>
        </div>

        <div style={styles.textContainer}>
          <div style={styles.title}>Avg Diastole</div>
          <p style={styles.description}>
            Avg Diastole: Ideally 70–80 mmHg, with values &gt;90 mmHg indicating
            hypertension and &lt;60 mmHg indicating hypotension.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TWave;

import { useState, useEffect } from "react";

function TWave() {
  // Systole values
  const systoleValue = 138; // As per the image
  const systoleMinValue = 90;
  const systoleMaxValue = 180;

  // Diastole values
  const diastoleValue = 85;
  const diastoleMinValue = 60;
  const diastoleMaxValue = 120;

  // Shared SVG dimensions (smaller)
  const svgWidth = 300;
  const svgHeight = 200;

  // Systole gauge dimensions and position (smaller)
  const systoleCenterX = svgWidth / 2; // Center horizontally
  const systoleCenterY = svgHeight / 2; // Center vertically
  const systoleRadius = 100;
  const systoleArcWidth = 20;

  // Diastole gauge dimensions and position (closer, overlapping bottom-right)
  const diastoleOffsetX = 0; // Reduced from 70 to bring closer
  const diastoleOffsetY = 0; // Reduced from 30 to bring closer
  const diastoleCenterX = systoleCenterX + diastoleOffsetX;
  const diastoleCenterY = systoleCenterY + diastoleOffsetY;
  const diastoleRadius = 60;
  const diastoleArcWidth = 15;

  const startAngle = Math.PI; // 180 degrees (left)
  const endAngle = 0; // 0 degrees (right)
  const totalAngleRad = Math.PI; // 180 degrees in radians

  // Function to generate an SVG arc path
  const generateArc = (start, end, rad, centerX, centerY) => {
    const startX = centerX + Math.cos(start) * rad;
    const startY = centerY - Math.sin(start) * rad;
    const endX = centerX + Math.cos(end) * rad;
    const endY = centerY - Math.sin(end) * rad;

    const largeArcFlag = Math.abs(end - start) > Math.PI ? 1 : 0;

    return `M ${startX} ${startY} A ${rad} ${rad} 0 ${largeArcFlag} 1 ${endX} ${endY}`;
  };

  // Calculate the systole arc
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
    systoleRadius,
    systoleCenterX,
    systoleCenterY
  );

  // Calculate the diastole arc
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
    diastoleRadius,
    diastoleCenterX,
    diastoleCenterY
  );

  // Function to position labels around the arc
  const getLabelPosition = (value, minValue, maxValue, radius, centerX, centerY) => {
    const ratio = (value - minValue) / (maxValue - minValue);
    const angle = startAngle - ratio * totalAngleRad;
    const labelRadius = radius ;
    const x = centerX + Math.cos(angle) * labelRadius;
    const y = centerY - Math.sin(angle) * labelRadius;
    return { x, y };
  };

  // Systole labels (90, 120, 140, 180)
  const systoleLabels = [90, 120, 140, 180].map((value) => ({
    value,
    ...getLabelPosition(
      value,
      systoleMinValue,
      systoleMaxValue,
      systoleRadius,
      systoleCenterX,
      systoleCenterY
    ),
  }));

  // Diastole labels (60, 90, 120)
  const diastoleLabels = [60, 90, 120].map((value) => ({
    value,
    ...getLabelPosition(
      value,
      diastoleMinValue,
      diastoleMaxValue,
      diastoleRadius,
      diastoleCenterX,
      diastoleCenterY
    ),
  }));

  // Styles (scaled down)
  const styles = {
    wrapper: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      alignItems: "center", // Center horizontally
      paddingTop: "1rem", // Add padding from top
    },
    container: {
      position: "relative",
      width: "100%",
      maxWidth: "600px",
      margin: "0 auto",
      display: "flex",
      justifyContent: "center", // Center the SVG
    },
    textContainer: {
      textAlign: "center",
      marginTop: "10px",
    },
    description: {
      fontSize: "12px",
      color: "#666",
      marginTop: "4px",
    },
    arcBlue: {
      stroke: "#30b6d9", // Blue for systole
      strokeWidth: systoleArcWidth,
      fill: "none",
    },
    arcGreen: {
      stroke: "#4caf50", // Green for diastole
      strokeWidth: diastoleArcWidth,
      fill: "none",
    },
    value: {
      fontSize: "20px",
      fontWeight: "bold",
      fill: "#333",
    },
    smallValue: {
      fontSize: "14px",
      fontWeight: "bold",
      fill: "#333",
    },
    label: {
      fontSize: "12px",
      fill: "#333",
    },
    smallLabel: {
      fontSize: "10px",
      fill: "#333",
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <svg width={svgWidth} height={svgHeight} viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
          {/* Systole arc */}
          <path d={systoleArcPath} style={styles.arcBlue} />

          {/* Systole value */}
          <text
            x={systoleCenterX}
            y={systoleCenterY - 15}
            textAnchor="middle"
            dominantBaseline="middle"
            style={styles.value}
          >
            {systoleValue}
          </text>

          {/* Systole range labels */}
          {systoleLabels.map((label, index) => (
            <text
              key={index}
              x={label.x}
              y={label.y}
              textAnchor="middle"
              dominantBaseline="middle"
              style={styles.label}
            >
              {label.value}
            </text>
          ))}

          {/* Diastole arc */}
          <path d={diastoleArcPath} style={styles.arcGreen} />

          {/* Diastole value */}
          <text
            x={diastoleCenterX}
            y={diastoleCenterY - 10}
            textAnchor="middle"
            dominantBaseline="middle"
            style={styles.smallValue}
          >
            {diastoleValue}
          </text>

          {/* Diastole range labels */}
          {diastoleLabels.map((label, index) => (
            <text
              key={index}
              x={label.x}
              y={label.y}
              textAnchor="middle"
              dominantBaseline="middle"
              style={styles.smallLabel}
            >
              {label.value}
            </text>
          ))}
        </svg>
      </div>

      {/* Combined description */}
      <div style={styles.textContainer}>
        <p style={styles.description}>
          Avg Systole: Ideally 110–120 mmHg (hypertension 140, hypotension 90). Avg Diastole: Ideally 70–80 mmHg (hypertension 90, hypotension 60).
        </p>
      </div>
    </div>
  );
}

export default TWave;
import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

function HeartRate() {
  const xData = Array.from({ length: 30 }, (_, i) => i + 1);

  const yData = [
    0, 0.1, 0.2, 0.5, -0.1, -0.5, 0, 1.2, -0.4, 0.2, 0.1, 0.3, -0.2, -0.6, 0,
    1.1, -0.3, 0.1, 0.2, 0.4, -0.1, -0.5, 0, 1.3, -0.4, 0.2, 0.1, 0.3, -0.2,
    -0.6,
  ];

  // --->  + 0.7
  const shiftedYData = yData.map((y) => y + 0.7);

  return (
    <div>
      <div className="heart-rate-graph">
        <div className="heart-rate-scrollable">
          <LineChart
            xAxis={[
              {
                data: xData,
                disableLine: true,
                disableTicks: true,
                disableAxisListener: true,
              },
            ]}
            yAxis={[{ disableLine: true, disableTicks: true }]}
            series={[
              {
                data: shiftedYData,
                showMark: ({ index }) => index % 2 === 0,
                color: "url(#heartRateGradient)",
                curveStyle: { strokeWidth: 5 },
                valueFormatter: () => "",
              },
            ]}
            height={310}
            width={1150}
            slotProps={{ legend: { hidden: true } }}
            tooltip={{ trigger: "none" }}
            margin={{ left: 0, right: 0, top: 0, bottom: 0 }}
            disableAxisListener={true}
          >
            <defs>
              <linearGradient
                id="heartRateGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "#4E4E4E", stopOpacity: 0.5 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#FE2549", stopOpacity: 0.1 }}
                />
              </linearGradient>
            </defs>
          </LineChart>
        </div>
      </div>
    </div>
  );
}

export default HeartRate;

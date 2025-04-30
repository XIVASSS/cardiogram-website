//RMSSD value

import { useEffect, useState } from "react";

function PRInterval() {
  const [rmssd, setRmssd] = useState(null);

  useEffect(() => {
    fetch(
      "https://rmdhlpqhfejbnmqiiakr.supabase.co/rest/v1/session_reports?select=*",
      {
        method: "GET",
        headers: {
          apikey:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJtZGhscHFoZmVqYm5tcWlpYWtyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU3NTA2MDUsImV4cCI6MjA2MTMyNjYwNX0.1SeozpqrB_gfPogq7vIGfTkSVat0LUXIpUERYtoTGPM",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJtZGhscHFoZmVqYm5tcWlpYWtyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU3NTA2MDUsImV4cCI6MjA2MTMyNjYwNX0.1SeozpqrB_gfPogq7vIGfTkSVat0LUXIpUERYtoTGPM",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          setRmssd(data[0].avg_rmssd); // fetch -> avg_rmssd from API
        }
      })
      .catch((err) => {
        console.error("API error:", err);
      });
  }, []);

  // Convert value to percentage
  const percentage = rmssd !== null ? `${rmssd}%` : "Loading...";
  const progressWidth = rmssd !== null ? `${rmssd}%` : "0%";

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
        {percentage}
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
            width: progressWidth,
            height: "20px",
            backgroundColor: "#555",
            borderRadius: "10px",
            transition: "width 0.3s ease",
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
        RMSSD value
      </div>

      <div
        style={{
          fontSize: "14px",
          color: "#999",
          marginTop: "80px",
        }}
      >
        this is the description placeholder for this tab about this specific
        tab.
      </div>
    </div>
  );
}

export default PRInterval;

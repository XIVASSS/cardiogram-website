import React, { useState, useEffect } from "react";

function QRSComplex() {
  const [rrInterval, setRrInterval] = useState(null);

  useEffect(() => {
    fetch(
      "https://rmdhlpqhfejbnmqiiakr.supabase.co/rest/v1/session_reports?select=*",
      {
        method: "GET",
        headers: {
          apikey: "your-api-key-here",
          Authorization: "Bearer your-api-key-here",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          setRrInterval(data[0].avg_rr_interval);
        }
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div
      style={{
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
        avg_rr_interval
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
        {rrInterval !== null ? (
          <>
            {rrInterval}{" "}
            <span style={{ fontSize: "12px", fontWeight: "lighter" }}>
              avg RR Interval
            </span>
          </>
        ) : (
          "Loading..."
        )}
      </div>

      <div
        style={{
          fontSize: "14px",
          color: "#ddd",
          marginTop: "20px",
        }}
      >
        This is the description placeholder for this tab about this specific
        tab.
      </div>
    </div>
  );
}

export default QRSComplex;

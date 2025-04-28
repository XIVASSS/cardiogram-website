function PRInterval() {
  return (
    <div>
      <div className="box-title">PR INTERVAL</div>
      <div className="box-value">160 <span className="box-unit">ms</span></div>
      <div className="progress-bar-background">
        <div className="progress-bar-fill" style={{ width: "65%" }}></div>
        <span className="progress-percentage">65%</span>
      </div>
      <div className="box-description">Slightly prolonged.</div>
    </div>
  );
}

export default PRInterval;
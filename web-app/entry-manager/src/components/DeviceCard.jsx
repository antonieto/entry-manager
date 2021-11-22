import React from "react";

const DeviceCard = () => {
  return (
    <div className="card" style={{ width: "300px", height: "260px" }}>
      <div className="card-header">Device From somewhere</div>
      <div className="card-body">Location: somewhere</div>
      <div className="card-footer">
        <button className="btn btn-info btn-block">Ver dispositivo</button>
      </div>
    </div>
  );
};

export default DeviceCard;

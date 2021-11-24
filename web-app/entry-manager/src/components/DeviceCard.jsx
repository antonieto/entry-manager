import React from "react";
import { Link } from "react-router-dom";

const DeviceCard = () => {
  return (
    <div className="card shadow" style={{ width: "300px", height: "260px" }}>
      <div className="card-header">Device From somewhere</div>
      <div className="card-body">Location: somewhere</div>
      <div className="card-footer">
        <Link to="/device/1" className="btn btn-info btn-block">
          Ver dispositivo
        </Link>
      </div>
    </div>
  );
};

export default DeviceCard;

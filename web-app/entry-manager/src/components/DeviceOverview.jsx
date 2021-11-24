import React from "react";

const DeviceOverview = ({ deviceKey }) => {
  return (
    <>
      <div className="p-4 border border-top-0">
        <div className="d-flex justify-content-around">
          <div className="card">
            <div className="card-header">Aforo actual</div>
            <div className="card-body">Some aforo</div>
          </div>
          <div className="card">
            <div className="card-header">Aforo actual</div>
            <div className="card-body">Some aforo</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeviceOverview;

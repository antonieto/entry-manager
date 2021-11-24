import React, { useState } from "react";

import { Link } from "react-router-dom";

import DeviceCard from "../components/DeviceCard";

const Dashboard = ({ user, setUser }) => {
  return (
    <>
      <div className="dashboard-root">
        <div className="dashboard-content mt-4">
          <div className="row">
            <div className="col col-sm">
              <DeviceCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

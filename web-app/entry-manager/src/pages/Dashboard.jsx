import React, { useState } from "react";

import { db, auth } from "../util/firebaseConfig";

import { useList } from "react-firebase-hooks/database";

import { Link } from "react-router-dom";

import DeviceCard from "../components/DeviceCard";

const Dashboard = ({ user, setUser }) => {
  const [devices, loading, error] = useList(db.ref("/devices"));

  return (
    <>
      <div className="dashboard-root">
        <div className="dashboard-content mt-4">
          <div className="row">
            <div className="col col-sm">
              {devices.map((device) => (
                <DeviceCard key={device.key} deviceKey={device.key} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

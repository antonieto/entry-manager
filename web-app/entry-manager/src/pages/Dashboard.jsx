import React from "react";

import { db } from "../util/firebaseConfig";

import { useList } from "react-firebase-hooks/database";

import DeviceCard from "../components/DeviceCard";
import { Alert, Spinner } from "react-bootstrap";

const Dashboard = () => {
  const [devices, loading, error] = useList(db.ref("/devices"));

  if (loading)
    return (
      <div className="center-item">
        <Spinner animation="border" size="lg" />
      </div>
    );
  if (error)
    return (
      <div className="center-item">
        <Alert variant="danger">Ocurrió un error</Alert>
      </div>
    );
  return (
    <>
      <div className="dashboard-root">
        <div className="dashboard-content">
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

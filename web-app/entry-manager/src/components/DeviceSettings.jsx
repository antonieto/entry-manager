import React, { useEffect, useState } from "react";
import DeviceSettingsForm from "./DeviceSettingsForm";

import { db, auth } from "../util/firebaseConfig";
import { useObjectVal } from "react-firebase-hooks/database";

import { Spinner } from "react-bootstrap";

const DeviceSettings = ({ deviceKey }) => {
  const [info, loadingInfo, errorInfo] = useObjectVal(
    db.ref(`/devices/${deviceKey}`)
  );
  const [formData, setFormData] = useState({
    activo: null,
    actuales: 0,
    capacidad: 0,
    location: "",
    maximo: 0,
  });
  useEffect(() => {
    console.log("info changed");
    if (info) {
      setFormData({
        activo: info.activo,
        actuales: info.actuales,
        capacidad: info.capacidad,
        location: info.location,
        maximo: info.maximo,
      });
    }
  }, [info]);

  if (!loadingInfo && !errorInfo && formData) {
    return (
      <div className="bg-light shadow p-3" style={{ width: "600px" }}>
        <h5 className="text-center">Configuracion de dispositivo</h5>
        <div className="text-center border-top border-bottom p-2">
          <span className="badge badge-primary badge-lg">{deviceKey}</span>
        </div>
        <DeviceSettingsForm
          formData={formData}
          setFormData={setFormData}
          info={info}
          deviceKey={deviceKey}
        />
      </div>
    );
  } else {
    return (
      <div className="center-item">
        <Spinner animation="border" />
      </div>
    );
  }
};

export default DeviceSettings;

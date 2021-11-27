import React from "react";
import AforoProgress from "./AforoProgress";

import { db } from "../util/firebaseConfig";
import { Link } from "react-router-dom";
import { useObjectVal } from "react-firebase-hooks/database";
import { Spinner } from "react-bootstrap";

const DeviceCard = ({ deviceKey }) => {
  const [location, loadingLocation, errorLocation] = useObjectVal(
    db.ref(`/devices/${deviceKey}/location`)
  );
  const [actuales, loadingActuales, errorActuales] = useObjectVal(
    db.ref(`/devices/${deviceKey}/actuales`)
  );
  const [maximo, loadingMaximo, errorMaximo] = useObjectVal(
    db.ref(`/devices/${deviceKey}/maximo`)
  );

  if (loadingActuales || loadingLocation || loadingMaximo) {
    console.log("loading aaa");
    return <Spinner animation="border" />;
  }

  return (
    <div className="card shadow" style={{ width: "300px", height: "260px" }}>
      <div className="card-header"> {deviceKey} </div>
      <div className="card-body">
        <div>
          Ubicacion: <strong> {location} </strong>{" "}
        </div>
        <div className="my-2">
          Aforo:{" "}
          <strong>
            {actuales} / {maximo}
          </strong>{" "}
        </div>
        <AforoProgress actuales={actuales} maximo={maximo} activo={true} />
      </div>

      <div className="card-footer">
        <Link to={`/device/${deviceKey}`} className="btn btn-success btn-block">
          Ver dispositivo
        </Link>
      </div>
    </div>
  );
};

export default DeviceCard;

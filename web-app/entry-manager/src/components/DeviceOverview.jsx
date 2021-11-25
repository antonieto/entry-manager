import React, { useEffect, useState } from "react";
import AforoProgress from "./AforoProgress";
import { useObjectVal } from "react-firebase-hooks/database";
import { db } from "../util/firebaseConfig";
import { Spinner } from "react-bootstrap";
import power from "../icons/power.svg";

const DeviceOverview = ({ deviceKey }) => {
  const [actuales, loadingActuales, errorActuales] = useObjectVal(
    db.ref(`/devices/${deviceKey}/actuales`)
  );
  const [maximo, loadingMaximo, errorMaximo] = useObjectVal(
    db.ref(`/devices/${deviceKey}/maximo`)
  );
  const [activo, loadingActivo, errorActivo] = useObjectVal(
    db.ref(`/devices/${deviceKey}/activo`)
  );
  const [allow, setAllow] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const handleAllowBtn = () => {
    if (activo) {
      db.ref(`/devices/${deviceKey}/activo`)
        .set(false)
        .then(() => {
          return;
        });
    } else {
      db.ref(`/devices/${deviceKey}/activo`)
        .set(true)
        .then(() => {
          return;
        });
    }
  };

  let porcentaje;
  if (loadingActuales) {
    return (
      <div className="center-item">
        <Spinner animation="border" />
      </div>
    );
  } else if (errorActuales) {
    return <div className="alert"> Something went wrong</div>;
  } else {
    return (
      <>
        <div className="p-4 border border-top-0 align-items-center shadow">
          <div className="d-flex justify-content-around mb-4">
            <button
              onClick={handleAllowBtn}
              className={
                " btn p-2 power-button" +
                (activo ? " btn-success" : " btn-danger")
              }
            >
              <img
                src={power}
                alt="powerSvg"
                width="50"
                style={{ filter: "invert(100%)" }}
              />
            </button>
          </div>
          <AforoProgress actuales={actuales} maximo={maximo} activo={activo} />
          <div className="d-flex justify-content-between my-2">
            <div className="mx-2">0</div>
            <div className="mx-2"> {maximo} </div>
          </div>
        </div>
      </>
    );
  }
};

export default DeviceOverview;

import React, { useEffect, useState } from "react";

import AforoProgress from "./AforoProgress";
import PowerButton from "./buttons/PowerButton";

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
          {/* <div className="d-flex justify-content-around mb-4 align-items-center">
            <div className="card">
              <div className="card-header">Detalles</div>
              <div className="card-body">
                Aforo acutal: <strong>{actuales}</strong>
              </div>
            </div>
            <PowerButton deviceKey={deviceKey} />
          </div>
          <AforoProgress actuales={actuales} maximo={maximo} activo={activo} />
          <div className="d-flex justify-content-between my-2">
            <div className="mx-2">0</div>
            <div className="mx-2"> {maximo} </div>
          </div> */}
        </div>
      </>
    );
  }
};

export default DeviceOverview;

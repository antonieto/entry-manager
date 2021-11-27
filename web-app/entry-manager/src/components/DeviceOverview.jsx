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
  const [location, loadingLoaction, errorLocation] = useObjectVal(
    db.ref(`/devices/${deviceKey}/location`)
  );

  if (loadingActuales || loadingActivo || loadingLoaction || loadingMaximo) {
    return (
      <div className="center-item">
        <Spinner animation="border" />
      </div>
    );
  } else if (errorActuales || errorActivo || errorLocation || errorMaximo) {
    return <div className="alert"> Something went wrong</div>;
  } else {
    let porcentaje = Math.round((actuales / maximo) * 100);
    return (
      <>
        <div className="p-4 border border-top-0 align-items-center shadow bg-light">
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
          <div className="row">
            <div className="col">
              <div
                className={
                  "rounded shadow p-4" +
                  (activo ? " border border-success" : " border border-danger")
                }
              >
                <div className="d-flex">
                  <PowerButton deviceKey={deviceKey} />
                  <div className="ml-4">
                    <h5>
                      {" "}
                      {activo ? "Entrada activada" : "Entrada bloqueada"}{" "}
                    </h5>
                    {activo
                      ? "La entrada está activa y se permiten entradas"
                      : "La entrada está bloqueada, nadie puede entrar"}
                  </div>
                </div>
              </div>
              <div className="border rounded shadow mt-4 p-4">
                <h5>Aforo actual</h5>
                <div className="mb-2">{actuales}</div>
                <AforoProgress
                  actuales={actuales}
                  maximo={maximo}
                  activo={activo}
                />
              </div>
            </div>
            <div className="col">
              <div className="rounded shadow p-4 bg-white">
                <h4>Detalles</h4>
                <div className="list-group-flush">
                  <div className="list-group-item">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>Ubicacion: </div>
                      <span className="badge-lg badge badge-primary">
                        {" "}
                        {location}{" "}
                      </span>
                    </div>
                  </div>
                  <div className="list-group-item">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>Aforo actual: </div>
                      <span className="badge-lg badge badge-primary">
                        {" "}
                        {actuales}{" "}
                      </span>
                    </div>
                  </div>
                  <div className="list-group-item">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>Porcentaje de ocupación: </div>
                      <span className="badge-lg badge badge-primary">
                        {" "}
                        {porcentaje}
                        {" %"}
                      </span>
                    </div>
                  </div>
                  <div className="list-group-item">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>Limite: </div>
                      <span className="badge-lg badge badge-primary">
                        {" "}
                        {maximo}{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default DeviceOverview;

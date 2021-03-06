import React from "react";

import AforoProgress from "./AforoProgress";
import PowerButton from "./buttons/PowerButton";

import { useObjectVal } from "react-firebase-hooks/database";
import { db } from "../util/firebaseConfig";
import { Spinner } from "react-bootstrap";

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
  const [capacidad, loadingCapacidad, errorCapacidad] = useObjectVal(
    db.ref(`/devices/${deviceKey}/capacidad`)
  );

  if (
    loadingActuales ||
    loadingActivo ||
    loadingLoaction ||
    loadingMaximo ||
    loadingCapacidad
  ) {
    return (
      <div className="center-item">
        <Spinner animation="border" />
      </div>
    );
  } else if (
    errorActuales ||
    errorActivo ||
    errorLocation ||
    errorMaximo ||
    errorCapacidad
  ) {
    return <div className="alert"> Something went wrong</div>;
  } else {
    let porcentaje = Math.round((actuales / maximo) * 100);
    const handleMaximoRange = (e) => {
      db.ref(`/devices/${deviceKey}/maximo`)
        .set(parseInt(e.target.value))
        .catch((e) => {
          console.error(e);
        });
    };
    return (
      <>
        <div className="p-4 border border-top-0 align-items-center shadow bg-light">
          <div className="row">
            <div className="col mb-4">
              <div
                className={
                  "rounded shadow p-4 bg-white" +
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
                      ? "La entrada est?? activa y se permiten entradas"
                      : "La entrada est?? bloqueada, nadie puede entrar"}
                  </div>
                </div>
              </div>
              <div className="border rounded shadow mt-4 p-4 bg-white">
                <h5>Aforo actual</h5>
                <div className="mb-2">
                  {" "}
                  <span className="badge badge-info rounded-pill">
                    {actuales}
                  </span>{" "}
                  /{" "}
                  <span className="badge badge-primary rounded-pill">
                    {" "}
                    {maximo}{" "}
                  </span>{" "}
                </div>
                <AforoProgress
                  actuales={actuales}
                  maximo={maximo}
                  activo={activo}
                />
              </div>
              <div className="border rounded shadow mt-4 p-4 bg-white">
                <h5> Modificar: </h5>
                <label htmlFor="maximoRange" className="form-label">
                  Aforo maximo:{" "}
                  <span className="badge badge-info rounded-pill">
                    {" "}
                    {maximo}{" "}
                  </span>{" "}
                  {"/"}{" "}
                  <span className="badge badge-primary rounded-pill">
                    {" "}
                    {capacidad}
                  </span>
                </label>
                <input
                  onChange={handleMaximoRange}
                  value={maximo}
                  min="0"
                  max={capacidad}
                  step="1"
                  type="range"
                  className="form-range w-100"
                  id="maximoRange"
                />
              </div>
            </div>
            <div className="col">
              <div className="border rounded shadow p-4 bg-white">
                <h4>Detalles</h4>
                <div className="list-group-flush">
                  <div className="list-group-item">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>Clave: </div>
                      <span className="badge-lg badge badge-dark">
                        {" "}
                        {deviceKey}{" "}
                      </span>
                    </div>
                  </div>
                  <div className="list-group-item">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>Ubicacion: </div>
                      <span className="badge-lg badge badge-dark">
                        {" "}
                        {location}{" "}
                      </span>
                    </div>
                  </div>
                  <div className="list-group-item">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>Capacidad: </div>
                      <span className="badge-lg badge badge-dark">
                        {" "}
                        {capacidad}{" "}
                      </span>
                    </div>
                  </div>
                  <div className="list-group-item">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>Limite: </div>
                      <span className="badge-lg badge badge-dark">
                        {" "}
                        {maximo}{" "}
                      </span>
                    </div>
                  </div>
                  <div className="list-group-item">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>Aforo actual: </div>
                      <span className="badge-lg badge badge-dark">
                        {" "}
                        {actuales}{" "}
                      </span>
                    </div>
                  </div>
                  <div className="list-group-item">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>Porcentaje de ocupaci??n: </div>
                      <span className="badge-lg badge badge-dark">
                        {" "}
                        {porcentaje}
                        {" %"}
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

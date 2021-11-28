import React, { useState } from "react";
import { db, auth } from "../util/firebaseConfig";
import { useObjectVal } from "react-firebase-hooks/database";

const DeviceSettings = ({ deviceKey }) => {
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

  const [error, setError] = useState("");
  const [nameInput, setNameInput] = useState(auth.currentUser.displayName);

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (!nameInput.trim()) return;
    auth.updateCurrentUser({ displayName: nameInput }).catch((error) => {
      setError("Something went wrong");
    });
  };

  return (
    <>
      <div className="bg-light p-4 shadow border" style={{ width: "500px" }}>
        <div className="list-group-flush shadow">
          <div className="list-group-item">
            <div className="d-flex align-items-center justify-content-between">
              <h6 className="m-0">Nombre de cuenta: </h6>
              <form onSubmit={handleNameSubmit}>
                <input
                  type="text"
                  className="form-control border-0"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                />
              </form>
            </div>
          </div>
          <div className="list-group-item">
            <div className="d-flex align-items-center justify-content-between">
              <h6 className="m-0">Capacidad: </h6>
              <form>
                <input
                  type="number"
                  className="form-control border-0"
                  value={capacidad}
                />
              </form>
            </div>
          </div>
          <div className="list-group-item">
            <div className="d-flex align-items-center justify-content-between">
              <h6 className="m-0">Nombre de cuenta: </h6>
              <form>
                <input
                  type="text"
                  className="form-control border-0"
                  value={auth.currentUser.displayName}
                />
              </form>
            </div>
          </div>
          <div className="list-group-item">
            <div className="d-flex align-items-center justify-content-between">
              <h6 className="m-0">Nombre de cuenta: </h6>
              <form>
                <input
                  type="text"
                  className="form-control border-0"
                  value={auth.currentUser.displayName}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeviceSettings;

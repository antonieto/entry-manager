import React from "react";

import { db } from "../util/firebaseConfig";

const DeviceSettingsForm = ({ formData, setFormData, info, deviceKey }) => {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  function infoChanged() {
    return JSON.stringify(formData) !== JSON.stringify(info);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    db.ref(`/devices/${deviceKey}`)
      .set(formData)
      .then(() => {
        console.log("Changed");
      })
      .catch(() => {
        console.log("Changed");
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit} id="settingsForm">
        <div className="form-group list-group-flush shadow">
          <div className="list-group-item d-flex justify-content-between align-items-center">
            <div>Ubicacion:</div>
            <input
              type="text"
              className="form-control border-0 settings-input"
              value={formData.location}
              name="location"
              onChange={handleChange}
            />
          </div>
          <div className="list-group-item d-flex justify-content-between align-items-center">
            <div>Capacidad:</div>
            <input
              type="number"
              className="form-control border-0 settings-input"
              value={formData.capacidad}
              name="capacidad"
              onChange={handleChange}
            />
          </div>
          <div className="list-group-item d-flex justify-content-between align-items-center">
            <div>Maximo:</div>
            <input
              type="text"
              className="form-control border-0 settings-input"
              onChange={handleChange}
              value={formData.maximo}
            />
          </div>
          <div className="list-group-item d-flex justify-content-between align-items-center">
            <div>Aforo actual:</div>
            <input
              type="number"
              className="form-control border-0 settings-input"
              onChange={handleChange}
              name="actuales"
              value={formData.actuales}
            />
          </div>
        </div>
      </form>
      {infoChanged() ? (
        <button
          type="submit"
          className="btn btn-dark btn-block"
          form="settingsForm"
        >
          Guardar cambios
        </button>
      ) : null}
    </>
  );
};

export default DeviceSettingsForm;

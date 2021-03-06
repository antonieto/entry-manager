import React, { useState } from "react";

import { db } from "../util/firebaseConfig";

const DeviceSettingsForm = ({ formData, setFormData, info, deviceKey }) => {
  const [valid, setValid] = useState(true);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    let value = e.target.value;
    if (e.target.name === "location") {
      if (value.trim() !== "") setValid(true);
    } else if (!value) {
      value = 0;
    } else {
      if (toString(value).substr(0) === "0") {
        value = parseInt(toString(value).substr(1, toString(value).length) - 2);
      }
      value = parseInt(value);
    }
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  function infoChanged() {
    return JSON.stringify(formData) !== JSON.stringify(info);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let { location } = formData;
    setLoading(false);
    // Validar datos de formData

    if (!location.trim()) {
      setValid(false);
      return;
    } else {
      db.ref(`/devices/${deviceKey}`)
        .set(formData)
        .then(() => {
          setValid(true);
          return;
        })
        .catch(() => {
          return;
        });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} id="settingsForm">
        <div className="form-group list-group-flush shadow">
          <div className="list-group-item d-flex justify-content-between align-items-center">
            <div>Ubicacion:</div>
            <input
              type="text"
              className={
                "form-control settings-input" +
                (valid ? " border-0" : " is-invalid")
              }
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
              type="number"
              className="form-control border-0 settings-input"
              onChange={handleChange}
              value={formData.maximo}
              name="maximo"
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

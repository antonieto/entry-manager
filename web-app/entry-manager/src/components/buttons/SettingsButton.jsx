import React from "react";

import settings from "../../icons/settings.svg";

const SettingsButton = () => {
  return (
    <button className="btn btn-dark btn-block">
      <img
        src={settings}
        alt="Settings Icon"
        style={{ filter: "invert(100%)", height: "19px" }}
        className="mr-1"
      />
      Configuración
    </button>
  );
};

export default SettingsButton;

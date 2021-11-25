import React, { useState } from "react";

import power from "../../icons/power.svg";

import { useObjectVal } from "react-firebase-hooks/database";
import { db } from "../../util/firebaseConfig";

const PowerButton = ({ deviceKey }) => {
  const [disabled, setDisabled] = useState(false);

  const [activo, loadingActivo, errorActivo] = useObjectVal(
    db.ref(`/devices/${deviceKey}/activo`)
  );

  const handleAllowBtn = () => {
    setDisabled(true);
    if (activo) {
      db.ref(`/devices/${deviceKey}/activo`)
        .set(false)
        .then(() => {
          setDisabled(false);
          return;
        })
        .catch(() => {
          setDisabled(false);
          return;
        });
    } else {
      db.ref(`/devices/${deviceKey}/activo`)
        .set(true)
        .then(() => {
          setDisabled(false);
          return;
        })
        .catch(() => {
          setDisabled(false);
          return;
        });
    }
  };

  return (
    <button
      onClick={handleAllowBtn}
      disabled={disabled}
      className={
        " btn p-2 power-button" + (activo ? " btn-success" : " btn-danger")
      }
    >
      <img
        src={power}
        alt="powerSvg"
        width="50"
        style={{ filter: "invert(100%)" }}
      />
    </button>
  );
};

export default PowerButton;

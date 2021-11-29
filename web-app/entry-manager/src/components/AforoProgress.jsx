import React from "react";

const AforoProgress = ({ actuales, maximo, activo }) => {
  let color;
  const porcentaje = (actuales / maximo) * 100;

  if (porcentaje >= 100) {
    color = " bg-danger";
  } else if (porcentaje >= 90) {
    color = " bg-warning";
  } else {
    color = " bg-primary";
  }

  return (
    <div className="progress" style={{ height: "40px" }}>
      <div
        className={
          "progress-bar" + color + (activo ? "" : " progress-bar-striped")
        }
        role="progressbar"
        style={{ width: `${porcentaje}%` }}
        aria-valuenow={porcentaje}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {" "}
        {Math.round(porcentaje)}
        {" %"}
      </div>
    </div>
  );
};

export default AforoProgress;

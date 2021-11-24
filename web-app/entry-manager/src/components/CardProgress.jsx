import React from "react";

const CardProgress = ({ actuales, maximo }) => {
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
    <div class="progress">
      <div
        className={"progress-bar" + color}
        role="progressbar"
        style={{ width: `${porcentaje}%` }}
        aria-valuenow={`${porcentaje}`}
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  );
};

export default CardProgress;

import React from "react";

import { useParams } from "react-router-dom";

const Device = () => {
  const { deviceId } = useParams();

  return <h4>From Device {deviceId} </h4>;
};

export default Device;

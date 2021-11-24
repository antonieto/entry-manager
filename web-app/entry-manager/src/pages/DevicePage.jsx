import React from "react";

import { useParams } from "react-router-dom";

const DevicePage = () => {
  const { deviceKey } = useParams();
  console.log(deviceKey);
  return (
    <div>
      <h2>From device {deviceKey}</h2>
    </div>
  );
};

export default DevicePage;

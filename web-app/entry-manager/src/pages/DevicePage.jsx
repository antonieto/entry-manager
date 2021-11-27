import React, { useState } from "react";
import DeviceOverview from "../components/DeviceOverview";

import { Link, Switch, Route } from "react-router-dom";

import { useParams } from "react-router-dom";
import DeviceCard from "../components/DeviceCard";
import AforoProgress from "../components/AforoProgress";

const DevicePage = () => {
  const { deviceKey } = useParams();
  const [active, setActive] = useState(1);
  console.log(deviceKey);
  return (
    <div className="mt-4 mr-4" style={{ width: "1200px" }}>
      <ul className="nav nav-tabs">
        <li
          className="nav-item"
          onClick={(e) => {
            setActive(1);
          }}
        >
          <Link
            to={`/device/${deviceKey}/overview`}
            className={
              "bg-dark text-white nav-link" + (active === 1 ? " active" : "")
            }
          >
            Overview
          </Link>
        </li>
        <li
          className="nav-item"
          onClick={(e) => {
            setActive(2);
          }}
        >
          <Link
            to={`/device/${deviceKey}/settings`}
            className={"nav-link" + (active === 2 ? " active" : "")}
          >
            Configuracion
          </Link>
        </li>
      </ul>
      <Switch>
        <Route path={`/device/${deviceKey}/overview`} exact>
          <DeviceOverview deviceKey={deviceKey} />
        </Route>
        <Route path={`/device/${deviceKey}/settings`} exact>
          <h4> Settings Page</h4>
        </Route>
        <Route>
          <DeviceOverview deviceKey={deviceKey} />
        </Route>
      </Switch>
    </div>
  );
};

export default DevicePage;

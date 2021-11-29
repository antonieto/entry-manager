import React, { useState } from "react";
import DeviceOverview from "../components/DeviceOverview";

import { Link, Switch, Route } from "react-router-dom";

import { useParams } from "react-router-dom";
import DeviceSettings from "../components/DeviceSettings";
import DeviceHistory from "../components/DeviceHistory";

const DevicePage = () => {
  const { deviceKey } = useParams();
  const [active, setActive] = useState(1);
  return (
    <div className="" style={{ width: "1200px" }}>
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
        <li
          className="nav-item"
          onClick={(e) => {
            setActive(3);
          }}
        >
          <Link
            to={`/device/${deviceKey}/history`}
            className={"nav-link" + (active === 3 ? " active" : "")}
          >
            Historial
          </Link>
        </li>
      </ul>
      <Switch>
        <Route path={`/device/${deviceKey}/overview`} exact>
          <DeviceOverview deviceKey={deviceKey} />
        </Route>
        <Route path={`/device/${deviceKey}/settings`} exact>
          <DeviceSettings deviceKey={deviceKey} />
        </Route>
        <Route path={`/device/${deviceKey}/history`} exact>
          <DeviceHistory deviceKey={deviceKey} />
        </Route>
        <Route>
          <DeviceOverview deviceKey={deviceKey} />
        </Route>
      </Switch>
    </div>
  );
};

export default DevicePage;

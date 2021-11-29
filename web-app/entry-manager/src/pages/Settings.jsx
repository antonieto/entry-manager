import React, { useState } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

const Settings = () => {
  const [active, setActive] = useState(1);
  return (
    <>
      <div className="mt-4" style={{ width: "800px" }}>
        <Router>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <Link
                className={"nav-link" + (active === 1 ? " active" : "")}
                data-bs-toggle="tab"
                to="/settings"
                onClick={(e) => {
                  setActive(1);
                }}
              >
                Cuenta
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={"nav-link" + (active === 2 ? " active" : "")}
                data-bs-toggle="tab"
                to="/settings/productos"
                onClick={(e) => {
                  setActive(2);
                }}
              >
                Productos
              </Link>
            </li>
          </ul>
          <div className="border border-top-0 p-2 shadow">
            <Switch>
              <Route path="/settings" exact>
                <h5>Page 1</h5>
              </Route>
              <Route path="/settings/productos" exact>
                <h5>Page 2</h5>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </>
  );
};

export default Settings;

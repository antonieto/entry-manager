import React from "react";

import { useHistory } from "react-router";
import { Link } from "react-router-dom";

import LogoutButton from "./buttons/LogoutButton";
import AddDeviceButton from "./buttons/AddDevice";
import { auth } from "../util/firebaseConfig";

import { Button } from "react-bootstrap";

const Sidebar = ({ setUser, user }) => {
  let history = useHistory();
  return (
    <>
      <div className="sidebar-container bg-light shadow d-flex flex-column justify-content-between">
        <div className="top">
          <h5 className="text-center">
            Welcome, {auth.currentUser.displayName}{" "}
          </h5>
          <Link to="/" className="btn btn-outline-dark btn-block">
            Home
          </Link>

          <Link className="btn btn-outline-info btn-block" to="/settings">
            Configuracion
          </Link>

          <AddDeviceButton />
        </div>
        <div className="button-group">
          <LogoutButton setUser={setUser} />
        </div>
      </div>
    </>
  );
};

export default Sidebar;

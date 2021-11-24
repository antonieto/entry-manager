import React from "react";

import { useHistory } from "react-router";
import { Link } from "react-router-dom";

import LogoutButton from "./buttons/LogoutButton";
import AddDeviceButton from "./buttons/AddDevice";
import SettingsButton from "./buttons/SettingsButton";
import settingsSvg from "../icons/settings.svg";
import logoAzul from "../icons/logo_azul.png";
import logoNegro from "../icons/logo_negro.png";

import { auth } from "../util/firebaseConfig";

import { Button, ButtonGroup } from "react-bootstrap";

const Sidebar = ({ setUser, user }) => {
  let history = useHistory();
  return (
    <>
      <div className="sidebar-container bg-light shadow d-flex flex-column justify-content-between">
        <div className="top">
          <img
            src={logoAzul}
            alt="logo"
            style={{
              width: "100%",
              marginBottom: "0rem",
              marginTop: "-1rem",
            }}
          />
          <h5
            className="text-center"
            style={{ borderTop: "1px solid grey", paddingTop: "1rem" }}
          >
            Welcome, {auth.currentUser.displayName}{" "}
          </h5>

          <Link to="/" className="btn btn-outline-info btn-block">
            Inicio
          </Link>

          <Link to="/settings" className="btn btn-dark btn-block">
            Configuración
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

import React from "react";

import { useHistory } from "react-router";
import { Link } from "react-router-dom";

import LogoutButton from "./buttons/LogoutButton";
import AddDeviceButton from "./buttons/AddDevice";
import SettingsButton from "./buttons/SettingsButton";
import settingsSvg from "../icons/settings.svg";
import logoAzul from "../icons/logo_azul.png";
import logoNegro from "../icons/logo_negro.png";
import logo from "../icons/svg_logo.svg";

import { auth } from "../util/firebaseConfig";

import { Button, ButtonGroup } from "react-bootstrap";

const Sidebar = ({ setUser, user }) => {
  let history = useHistory();
  return (
    <>
      <div className="sidebar-container bg-light shadow d-flex flex-column justify-content-between">
        <div className="top">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              style={{
                width: "100%",
                marginBottom: "1rem",
                marginTop: "0.5rem",
              }}
            />
          </Link>
          <div
            className="text-center"
            style={{
              borderTop: "1px solid #b1b1b1",
              paddingTop: "1.5rem",
              paddingBottom: "1.5rem",
            }}
          >
            Welcome,{" "}
            <span className="badge badge-success">
              {" "}
              {auth.currentUser.displayName}
            </span>{" "}
          </div>

          <Link to="/" className="btn btn-outline-info btn-block">
            Inicio
          </Link>

          <Link to="/settings" className="btn btn-outline-dark btn-block">
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

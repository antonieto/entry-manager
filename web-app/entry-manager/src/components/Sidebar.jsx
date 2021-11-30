import React from "react";

import { Link } from "react-router-dom";

import LogoutButton from "./buttons/LogoutButton";
import AddDeviceButton from "./buttons/AddDevice";
import logo from "../icons/svg_logo.svg";

import { auth } from "../util/firebaseConfig";

const Sidebar = () => {
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

          <AddDeviceButton />
        </div>
        <div className="button-group">
          <LogoutButton />
        </div>
      </div>
    </>
  );
};

export default Sidebar;

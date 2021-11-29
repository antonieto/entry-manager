import React from "react";
import { Link } from "react-router-dom";
import logoAzul from "../icons/svg_logo.svg";
const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src={logoAzul}
            alt="Logo entry manager"
            width="200"
            style={{ padding: "-1rem", margin: "-2rem" }}
          />
        </Link>
        <div>
          <Link className="text-muted" to="/login">
            Iniciar Sesión
          </Link>
          <Link className="btn btn-dark ml-4" to="/signup">
            Registrarte
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

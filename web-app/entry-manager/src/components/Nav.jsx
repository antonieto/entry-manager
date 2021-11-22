import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Entry Manager
        </Link>
        <div>
          <Link className="text-muted" to="/login">
            Acceso a clientes
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

import React, { useState } from "react";
import { BrowserRouter as Router, Link, Switch } from "react-router-dom";
import { auth } from "../util/firebaseConfig";
import { Alert } from "react-bootstrap";

const Signup = () => {
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = form;
    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      setError("Te falta un campo por llenar");
      return;
    } else if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    return;
  };

  return (
    <div className="center-item">
      <div className="card bg-light" style={{ width: "400px" }}>
        <div className="card-header">
          <h5> Ingresa Tus Datos </h5>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit} id="signupForm">
            <div className="form-group">
              <label htmlFor="">Email: </label>
              <input
                type="email"
                name="email"
                placeholder="Tu email..."
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Password: </label>
              <input
                type="password"
                name="password"
                placeholder="Introduce una contraseña válida"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Confirmar password: </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirma tu contraseña..."
                className="form-control"
                onChange={handleChange}
              />
            </div>
            {error ? (
              <Alert variant="danger" className="m-0">
                {" "}
                {error}{" "}
              </Alert>
            ) : null}
          </form>
        </div>
        <div className="card-footer">
          <button
            form="signupForm"
            type="submit"
            className="btn btn-primary btn-block"
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;

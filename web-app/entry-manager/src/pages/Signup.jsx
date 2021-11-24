import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { auth } from "../util/firebaseConfig";
import { Alert, Spinner } from "react-bootstrap";
import axios from "axios";

const Signup = ({ setUser }) => {
  let history = useHistory();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    displayName: "",
    handle: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const { email, password, confirmPassword, handle, displayName } = form;
    if (
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim() ||
      !handle.trim() ||
      !displayName.trim()
    ) {
      setError("Te falta un campo por llenar");
      setLoading(false);
      return;
    } else if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      setLoading(false);
      return;
    } else {
      console.log(form.email);
      axios
        .post(
          "http://localhost:5000/entry-manager-dd8f9/us-central1/api/signup",
          {
            Headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
            email,
            password,
            confirmPassword,
            handle,
            displayName,
          }
        )
        .then(() => {
          auth.signInWithEmailAndPassword(form.email, form.password);
        })
        .then((user) => {
          setUser(user);
          setLoading(false);
          history.push("/");
          return;
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
          return;
        });
    }

    // Call API
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
                placeholder="Tu email"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Tu nombre: </label>
              <input
                type="text"
                name="displayName"
                placeholder="Ingresa un nombre real"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Nombre de usuario: </label>
              <input
                type="text"
                name="handle"
                placeholder="Elige un nombre de usuario"
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
                placeholder="Confirma tu contraseña"
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
            disabled={loading}
            form="signupForm"
            type="submit"
            className={"btn btn-primary btn-block"}
          >
            {loading ? <Spinner animation="grow" size="sm" /> : null}
            {loading ? "Cargando..." : "Enviar"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;

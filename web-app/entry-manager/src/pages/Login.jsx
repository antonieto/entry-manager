import React, { useState } from "react";
import { Alert, Spinner } from "react-bootstrap";
import { auth } from "../util/firebaseConfig";
import { useHistory } from "react-router";

const Login = ({ setLoading }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loginLoading, setLoginLoading] = useState(false);

  const [error, setError] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    setLoginLoading(true);
    e.preventDefault();
    if (!formData.email.trim() || !formData.password.trim()) {
      setError("Todos los campos son obligatorios");
      setLoginLoading(false);
      return;
    }
    setError("");

    auth
      .signInWithEmailAndPassword(formData.email, formData.password)
      .then((user) => {
        setLoginLoading(false);
        return user.user.getIdToken();
      })
      .then((token) => {
        setLoginLoading(false);
        document.cookie = `userToken= ${token}`;
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 2500);
        history.push("/");
      })
      .catch(() => {
        setLoginLoading(false);
        setError("Something went wrong");
      });
  };

  return (
    <div className="center-item">
      <div className="card bg-light shadow" style={{ width: "400px" }}>
        <div className="card-header">
          <h5> Ingresa Tus Credenciales </h5>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
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
                placeholder="Tu contraseña..."
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <button
              disabled={loginLoading}
              className="btn btn-primary btn-block"
            >
              {loginLoading && (
                <Spinner className="mr-2" animation="grow" size="sm" />
              )}
              {loginLoading ? "Cargando..." : "Enviar"}
            </button>
          </form>
          {error ? (
            <Alert variant="danger" className="mt-2">
              {" "}
              {error}{" "}
            </Alert>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Login;

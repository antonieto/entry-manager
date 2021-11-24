import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { auth } from "../util/firebaseConfig";
import { useHistory } from "react-router";

const Login = ({ setUser }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email.trim() || !formData.password.trim()) {
      setError("Todos los campos son obligatorios");
      return;
    }
    setError("");

    auth
      .signInWithEmailAndPassword(formData.email, formData.password)
      .then((user) => {
        setUser(user);
        return user.user.getIdToken();
      })
      .then((token) => {
        console.log(token);
        document.cookie = `userToken= ${token}`;
        history.push("/");
      })
      .catch(() => {
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
                type="text"
                name="password"
                placeholder="Tu contraseña..."
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <button className="btn btn-primary btn-block">Submit</button>
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

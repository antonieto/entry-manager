import React from "react";
import { Alert } from "react-bootstrap";

const NotFound = () => {
  return (
    <div className="center-item" style={{ width: "400px" }}>
      <h2> 404</h2>
      <Alert variant="dark">
        <h4>La página que buscas no existe</h4>
      </Alert>
    </div>
  );
};

export default NotFound;

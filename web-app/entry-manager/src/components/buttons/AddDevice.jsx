import React from "react";
import add from "../../icons/add2.svg";

const AddDeviceButton = () => {
  return (
    <>
      <button className="btn btn-block btn-primary d-flex justify-content-center">
        <img
          src={add}
          alt="Add icon"
          className="mr-1"
          style={{ filter: "invert(100%)" }}
        />
        Nuevo dispositivo
      </button>
    </>
  );
};

export default AddDeviceButton;

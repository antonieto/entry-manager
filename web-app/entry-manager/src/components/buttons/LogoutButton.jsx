import React from "react";

import logout from "../../icons/logout.svg";

import { auth } from "../../util/firebaseConfig";

import { useHistory } from "react-router";

const LogoutButton = () => {
  let history = useHistory();

  const handleClick = () => {
    console.log("logging out");
    auth.signOut().then(() => {
      history.push("/");
    });
  };

  return (
    <button className="btn btn-danger btn-block" onClick={handleClick}>
      <div className="d-flex justify-content-center">
        <img
          src={logout}
          alt="Logout Icon"
          className="mr-2"
          style={{ filter: "invert(100%)" }}
        />
        Log Out
      </div>
    </button>
  );
};

export default LogoutButton;

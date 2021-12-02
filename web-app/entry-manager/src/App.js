import React, { useState } from "react";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import Nav from "./components/Nav";
import Signup from "./pages/Signup";
import Sidebar from "./components/Sidebar";
import Settings from "./pages/Settings";
import DevicePage from "./pages/DevicePage";
import NotFound from "./pages/NotFound";

import homeGif from "./icons/in.gif";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "./util/firebaseConfig";
import { Alert, Spinner } from "react-bootstrap";

function App() {
  const [loading, setLoading] = useState(false);

  const [user, loadingUser, errorUser] = useAuthState(auth);

  if (loading) {
    return (
      <div className="center-item">
        <img src={homeGif} alt="Gif" width="800px" />
      </div>
    );
  }

  if (loadingUser) {
    return (
      <div className="center-item">
        {" "}
        <Spinner animation="border" />
      </div>
    );
  }

  if (errorUser) {
    return (
      <div className="center-item">
        <Alert variant="danger">Ocurrió un error</Alert>
      </div>
    );
  }

  if (!user)
    return (
      <>
        <Router>
          <Nav />
          <Switch>
            <Route path="/" exact>
              <Login setLoading={setLoading} />
            </Route>
            <Route path="/login" exact>
              <Login setLoading={setLoading} />
            </Route>
            <Route path="/signup" exact>
              <Signup />
            </Route>
            <Route>
              <Login setLoading={setLoading} />
            </Route>
          </Switch>
        </Router>
      </>
    );
  else {
    setTimeout(() => {}, 3000);
    return (
      <>
        <Router>
          <div className="d-flex">
            <Sidebar />
            <div
              className="p-4"
              style={{ maxHeight: "100vh", width: "100%", overflowY: "scroll" }}
            >
              <Switch>
                <Route path="/" exact>
                  <Dashboard />
                </Route>
                <Route path="/settings" exact>
                  <Settings />
                </Route>
                <Route path="/device/:deviceKey">
                  <DevicePage />
                </Route>
                <Route>
                  <NotFound />
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      </>
    );
  }
}

export default App;

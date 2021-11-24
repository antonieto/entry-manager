import React, { useState, useEffect } from "react";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import Nav from "./components/Nav";
import Signup from "./pages/Signup";
import Sidebar from "./components/Sidebar";
import Settings from "./pages/Settings";
import DevicePage from "./pages/DevicePage";

import homeGif from "./icons/home.gif";

import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  useHistory,
} from "react-router-dom";

// import useAuthState from "react-firebase-hooks/auth"

import { auth } from "./util/firebaseConfig";

function App() {
  // return <Dashboard />;
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(auth.currentUser);
  auth.onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
    } else {
      setLoading(false);
      setUser(null);
    }
  });

  useEffect(() => {
    setUser(auth.currentUser);
  }, [auth.currentUser]);
  // auth\
  //   .signInWithEmailAndPassword("admin@email.com", "iotEquipo6")
  //   .then((usr) => setUser(usr))
  //   .catch(console.log("A"));
  if (loading) {
    return (
      <div className="center-item">
        <img src={homeGif} alt="Gif" width="800px" />
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
              <Homepage />
            </Route>
            <Route path="/login" exact>
              <Login user={user} setUser={setUser} setLoading={setLoading} />
            </Route>
            <Route path="/signup" exact>
              <Signup setUser={setUser} />
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
            <Sidebar setUser={setUser} />
            <Switch>
              <Route path="/" exact>
                <Dashboard user={user} setUser={setUser} />
              </Route>
              <Route path="/settings" exact>
                <Settings />
              </Route>
              <Route path="/device/:deviceKey">
                <DevicePage />
              </Route>
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}

export default App;

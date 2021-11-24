import React, { useState, useEffect } from "react";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import Nav from "./components/Nav";
import Signup from "./pages/Signup";
import Sidebar from "./components/Sidebar";
import Settings from "./pages/Settings";

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

  const [user, setUser] = useState(auth.currentUser);
  auth.onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });

  useEffect(() => {
    setUser(auth.currentUser);
  }, [auth.currentUser]);
  // auth\
  console.log(auth.currentUser);
  //   .signInWithEmailAndPassword("admin@email.com", "iotEquipo6")
  //   .then((usr) => setUser(usr))
  //   .catch(console.log("A"));
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
              <Login user={user} setUser={setUser} />
            </Route>
            <Route path="/signup" exact>
              <Signup />
            </Route>
          </Switch>
        </Router>
      </>
    );
  else
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
            </Switch>
          </div>
        </Router>
      </>
    );
}

export default App;

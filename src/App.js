import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/layout/Navbar";
import Dashboard from "./Components/dashboard/Dashboard";
import ProjectDetails from "./Components/projects/projectDetails";
import SignIn from "./Components/auth/SignedIn";
import SignUp from "./Components/auth/Signedup";
import CreateProject from "./Components/projects/createProject";
import SocialMedia from "./Components/layout/SocialMedia";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/project/:id">
            <ProjectDetails />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/create_project">
            <CreateProject />
          </Route>

          <Route path="/social">
            <SocialMedia />
          </Route>
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;

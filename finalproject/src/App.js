import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import CustSignup from "./components/Signup/CustSignup";
import Home from "./components/Home/Home";
import DisplayJoints from "./components/DisplayJoints/DisplayJoints";
import MenuDetails from "./components/MenuDetails/MenuDetails";
import MenuCard from "./components/MenuCard/MenuCard";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={CustSignup} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/displayjoints" component={DisplayJoints} />
          <Route exact path="/menudetails" component={MenuDetails} />
          <Route exact path="/menucard" component={MenuCard} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import { Route, Router } from "react-router-dom";
import Login from "./components/Login/Login";
import CustSignup from "./components/Signup/CustSignup";
import Home from "./components/Home/Home";
import DisplayJoints from "./components/DisplayJoints/DisplayJoints";
import MenuDetails from "./components/MenuDetails/MenuDetails";
import MenuCard from "./components/MenuCard/MenuCard";
import history from "./history";
import Orders from "./components/Order/Orders";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={CustSignup} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/displayjoints" component={DisplayJoints} />
          <Route exact path="/menudetails" component={MenuDetails} />
          <Route exact path="/menucard" component={MenuCard} />
          <Route exact path="/orders" component={Orders} />
        </div>
      </Router>
    );
  }
}

export default App;

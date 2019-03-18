import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import DisplayJoints from "./components/DisplayJoints/DisplayJoints";
import MenuDetails from "./components/MenuDetails/MenuDetails";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/displayjoints" component={DisplayJoints} />
          <Route exact path="/menudetails" component={MenuDetails} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

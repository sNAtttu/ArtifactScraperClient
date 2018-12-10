import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import DraftForm from "./Components/DraftForm";
import Home from "./Components/Home";
import DataService from "./Utilities/DataService";
class App extends Component {
  public render() {
    return (
      <div className="App">
        <header />
        <div className="AppBody">
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/deck/post" component={DraftForm} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

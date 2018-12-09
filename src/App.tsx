import React, { Component } from "react";
import "./App.css";
import DraftForm from "./Components/DraftForm";
import logo from "./logo.svg";
import DataService from "./Utilities/DataService";

class App extends Component {
  public cards = [];
  public componentDidMount() {
    DataService.getDraftDecks().then(fetchedCards =>
      this.setState((this.cards = fetchedCards))
    );
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <DraftForm />
        </header>
      </div>
    );
  }
}

export default App;

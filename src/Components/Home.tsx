import React, { Component } from "react";
import { IDeck } from "../Types/Deck";
import DataService from "../Utilities/DataService";
import Deck from "./Deck";
export default class Home extends Component<{}, { decks: IDeck[] }> {
  constructor(props: any) {
    super(props);
    this.state = { decks: [] };
  }
  public componentDidMount() {
    DataService.getDraftDecks().then(fetchedDecks =>
      this.setState({ decks: fetchedDecks })
    );
  }
  public render() {
    const deckElements = this.state.decks.map(deckObj => {
      return <Deck key={deckObj.deckCode} deck={deckObj} />;
    });
    return <div>{deckElements}</div>;
  }
}

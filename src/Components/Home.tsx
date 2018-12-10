import React, { Component } from "react";
import { IDeck } from "../Types/Deck";
import DataService from "../Utilities/DataService";
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
    const cardElements = this.state.decks.map(cardObj => {
      return (
        <div key={cardObj.deckCode}>
          <p>Wins: {cardObj.wins}</p>
          <p>Loses: {cardObj.loses}</p>
        </div>
      );
    });
    return <div>{cardElements}</div>;
  }
}

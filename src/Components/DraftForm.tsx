import React, { Component } from "react";
import DataService from "../Utilities/DataService";

type DraftType = "Casual" | "Phantom" | "Keeper";

export default class DraftForm extends Component<
  {},
  {
    author: string;
    winAmount: number;
    loseAmount: number;
    deckCode: string;
    draftType: DraftType;
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      author: "sNAttu",
      deckCode: "",
      draftType: "Casual",
      loseAmount: 2,
      winAmount: 0
    };

    this.handleLoseAmountChange = this.handleLoseAmountChange.bind(this);
    this.handleWinAmountChange = this.handleWinAmountChange.bind(this);
    this.handleDeckCodeChange = this.handleDeckCodeChange.bind(this);
    this.handleDraftTypeChange = this.handleDraftTypeChange.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  public submitForm(event: any) {
    event.preventDefault();
    const { author, deckCode, draftType, loseAmount, winAmount } = this.state;
    const draftData = {
      author,
      deckCode,
      draftType,
      loseAmount,
      winAmount
    };
    DataService.postDraftDeck(draftData);
  }

  public handleAuthorChange(event: any) {
    this.setState({
      author: event.target.value
    });
  }
  public handleDeckCodeChange(event: any) {
    this.setState({
      deckCode: event.target.value
    });
  }
  public handleDraftTypeChange(event: any) {
    this.setState({
      draftType: event.target.value
    });
  }
  public handleWinAmountChange(event: any) {
    this.setState({
      winAmount: parseInt(event.target.value, 10)
    });
  }
  public handleLoseAmountChange(event: any) {
    this.setState({
      loseAmount: parseInt(event.target.value, 10)
    });
  }
  public render() {
    return (
      <form onSubmit={this.submitForm}>
        <label>
          Author:
          <input
            type="text"
            value={this.state.author}
            onChange={this.handleAuthorChange}
          />
        </label>
        <br />
        <label>
          Wins:
          <input
            type="number"
            value={this.state.winAmount}
            onChange={this.handleWinAmountChange}
          />
        </label>
        <br />
        <label>
          Loses:
          <input
            type="number"
            value={this.state.loseAmount}
            onChange={this.handleLoseAmountChange}
          />
        </label>
        <br />
        <label>
          Draft Type:
          <input
            type="text"
            value={this.state.draftType}
            onChange={this.handleDraftTypeChange}
          />
        </label>
        <br />
        <label>
          Deck code:
          <input
            type="text"
            value={this.state.deckCode}
            onChange={this.handleDeckCodeChange}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

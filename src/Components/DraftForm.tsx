import React, { Component } from "react";
import { FormSubmitButton } from "../Styled/PostDeckForm";
import { DraftType } from "../Types/Draft";
import DataService from "../Utilities/DataService";
import FormInput from "./FormInput";
export default class DraftForm extends Component<
  {},
  {
    author: string;
    winAmount: number;
    loseAmount: number;
    deckCode: string;
    draftType: DraftType;
    isLoading: boolean;
  }
> {
  constructor(props: React.Props<any>) {
    super(props);
    this.state = {
      author: "sNAttu",
      deckCode: "",
      draftType: "Casual",
      isLoading: false,
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
    this.setState({ isLoading: true });
    DataService.postDraftDeck(draftData).then(res => {
      console.log(res);
      this.setState({ isLoading: false });
    });
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
        <FormInput
          labelText={"Author"}
          inputType={"text"}
          value={this.state.author}
          handleValueChange={this.handleAuthorChange}
        />
        <FormInput
          labelText={"Wins"}
          inputType={"number"}
          value={this.state.winAmount}
          handleValueChange={this.handleWinAmountChange}
        />
        <FormInput
          labelText={"Loses"}
          inputType={"number"}
          value={this.state.loseAmount}
          handleValueChange={this.handleLoseAmountChange}
        />
        <FormInput
          labelText={"Draft Type"}
          inputType={"text"}
          value={this.state.draftType}
          handleValueChange={this.handleDraftTypeChange}
        />
        <FormInput
          labelText={"Deck Code"}
          inputType={"text"}
          value={this.state.deckCode}
          handleValueChange={this.handleDeckCodeChange}
        />
        <FormSubmitButton
          type="submit"
          value="Submit"
          disabled={this.state.isLoading}
        />
      </form>
    );
  }
}

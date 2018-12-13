import { Color } from "csstype";
import React, { Component } from "react";
import {
  SummaryGridContainer,
  SummaryHeaderTitle,
  SummaryValue
} from "../Styled/Home";
import { ICard, IDeck, IHero } from "../Types/Deck";
import DataService from "../Utilities/DataService";
import Statistics from "../Utilities/Statistics";
import Deck from "./Deck";
export default class Home extends Component<
  {},
  {
    decks: IDeck[];
    mostPlayedCard: ICard;
    isLoading: boolean;
    mostPlayedColor: Color;
    mostPlayedHero: IHero;
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      decks: [],
      isLoading: true,
      mostPlayedCard: {
        cardAmountInDeck: 0,
        cardName: "",
        color: "Black",
        cost: 0,
        isSignatureCard: false,
        type: "Creep"
      },
      mostPlayedColor: "Black",
      mostPlayedHero: {
        color: "Black",
        name: "",
        signatureCard: ""
      }
    };
  }
  public componentDidMount() {
    DataService.getDraftDecks().then(fetchedDecks => {
      this.setState({
        decks: fetchedDecks,
        isLoading: false,
        mostPlayedCard: Statistics.getMostPickedCard(fetchedDecks),
        mostPlayedColor: Statistics.getMostPlayedColor(fetchedDecks),
        mostPlayedHero: Statistics.getMostPlayedHero(fetchedDecks)
      });
    });
  }
  public render() {
    let renderElement;
    if (this.state.isLoading) {
      renderElement = <div>Lataa</div>;
    } else {
      renderElement = (
        <SummaryGridContainer>
          <SummaryHeaderTitle>Most Played Card</SummaryHeaderTitle>
          <SummaryHeaderTitle>Most Played Color</SummaryHeaderTitle>
          <SummaryHeaderTitle>Most Played Hero</SummaryHeaderTitle>
          <SummaryHeaderTitle>Most Played Combination</SummaryHeaderTitle>
          <SummaryValue>{this.state.mostPlayedCard.cardName}</SummaryValue>
          <SummaryValue>{this.state.mostPlayedCard.color}</SummaryValue>
          <SummaryValue>{this.state.mostPlayedHero.name}</SummaryValue>
        </SummaryGridContainer>
      );
    }
    return renderElement;
  }
}

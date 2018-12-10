import React from "react";
import { DeckContainer, DeckObject } from "../Styled/Deck";
import { IDeck } from "../Types/Deck";
const Deck = ({ deck }: { deck: IDeck }) => {
  return (
    <DeckContainer>
      <DeckObject>
        <span>Wins: {deck.wins}</span>
        <span>Loses: {deck.loses}</span>
      </DeckObject>
    </DeckContainer>
  );
};

export default Deck;

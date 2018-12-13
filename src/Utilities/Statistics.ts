import { Color, ICard, IDeck } from "../Types/Deck";
export default class Statistics {
  public static getMostPlayedColor(decks: IDeck[]): Color {
    const cards = this.flattenDecksToCardArray(decks);
    const cardsByColor = [
      cards.filter(c => c.color === "Blue").length,
      cards.filter(c => c.color === "Black").length,
      cards.filter(c => c.color === "Green").length,
      cards.filter(c => c.color === "Red").length
    ];
    const mostPlayedColorAmount = Math.max(...cardsByColor);
    const indexOfColor = cardsByColor.findIndex(
      amount => amount === mostPlayedColorAmount
    );
    switch (indexOfColor) {
      case 0:
        return "Blue";
      case 1:
        return "Black";
      case 2:
        return "Green";
      case 3:
        return "Red";
      default:
        throw ErrorEvent;
    }
  }

  // Does not count signature cards or items
  public static getMostPickedCard(decks: IDeck[]): ICard {
    const reducedArray = this.flattenDecksToCardArray(decks);

    let mostUsedCard: ICard = reducedArray[0];

    reducedArray.forEach(card => {
      if (card.cardAmountInDeck > mostUsedCard.cardAmountInDeck) {
        mostUsedCard = card;
      }
    });

    return mostUsedCard;
  }
  private static flattenDecksToCardArray(decks: IDeck[]): ICard[] {
    const allCardsFromDecks: ICard[] = [];
    decks.forEach(deck => {
      allCardsFromDecks.push(
        ...deck.cards.filter(c => !c.isSignatureCard && c.type !== "Item")
      );
    });
    const reducedArray = allCardsFromDecks
      .sort((cardA, cardB) => cardA.cardName.localeCompare(cardB.cardName))
      .reduce((allCards: ICard[], nextCard) => {
        const lastItemIndex = allCards.length - 1;
        const cardsLeft = allCards.length >= 1;

        if (
          cardsLeft &&
          allCards[lastItemIndex].cardName === nextCard.cardName
        ) {
          allCards[lastItemIndex].cardAmountInDeck += nextCard.cardAmountInDeck;
        } else {
          // first time seeing this entry. add it!
          allCards[lastItemIndex + 1] = nextCard;
        }
        return allCards;
      }, []);
    return reducedArray;
  }
}

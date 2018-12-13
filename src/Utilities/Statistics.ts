import { Color, ICard, IDeck, IHero } from "../Types/Deck";
interface IHeroAmount {
  name: string;
  count: number;
}
export default class Statistics {
  public static getMostPlayedHero(decks: IDeck[]): IHero {
    const allHeroesFromDecks: IHero[] = [];
    decks.forEach(deck => allHeroesFromDecks.push(...deck.heroes));
    const heroAmounts: IHeroAmount[] = [];
    allHeroesFromDecks.forEach(hero => {
      const heroIndex = heroAmounts.findIndex(
        heroAmount => heroAmount.name === hero.name
      );
      if (heroIndex < 0) {
        heroAmounts.push({ name: hero.name, count: 1 });
      } else {
        heroAmounts[heroIndex].count += 1;
      }
    });

    const maxHeroIndex = heroAmounts.findIndex(heroAmount => {
      const maxCount = Math.max.apply(Math, heroAmounts.map(ha => ha.count));
      return maxCount === heroAmount.count;
    });

    const matchingHero = allHeroesFromDecks.find(
      hero => hero.name === heroAmounts[maxHeroIndex].name
    );
    if (!matchingHero) {
      throw ErrorEvent;
    }
    return matchingHero;
  }
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

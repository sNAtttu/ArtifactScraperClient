export type DraftType = "Casual" | "Phantom" | "Keeper";

export interface IDeckData {
  author: string;
  winAmount: number;
  loseAmount: number;
  deckCode: string;
  draftType: DraftType;
}

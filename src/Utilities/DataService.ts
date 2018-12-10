import { IDeckData } from "../Types/Draft";
export default class DataService {
  public static async getDraftDecks() {
    return fetch(this.backendUrl + this.deckEndpoint)
      .then(response => {
        return response.json();
      })
      .then(data => data);
  }
  public static async postDraftDeck(deckData: IDeckData) {
    if (!deckData.deckCode) {
      console.log("Deck code is required");
      console.log("Trying to send following object: ");
      console.log(deckData);
      return;
    }
    fetch(this.backendUrl + this.deckEndpoint, {
      body: JSON.stringify(deckData), // body data type must match "Content-Type" header
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      method: "POST"
    }).then(response => console.log(response));
  }
  private static readonly backendUrl: string = "http://localhost:3001/";
  private static readonly deckEndpoint: string = "deck";
}

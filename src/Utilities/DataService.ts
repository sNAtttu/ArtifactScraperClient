export default class DataService {
  public static async getDraftDecks() {
    return fetch(this.backendUrl + this.deckEndpoint)
      .then(response => {
        return response.json();
      })
      .then(data => data);
  }
  private static readonly backendUrl: string = "http://localhost:3001/";
  private static readonly deckEndpoint: string = "deck";
}

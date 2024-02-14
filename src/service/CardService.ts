import Card from "../Entity/Card";
import pgp from "pg-promise";

export default class CardService {
  constructor() {}

  async getCards(idColumn: number) {
    const connection = pgp()("postgres://postgres:1234@localhost:5434/app");
    const cardsData = await connection.query(
      "select * from branas.card where id_column = $1",
      [idColumn]
    );
    const cards: Card[] = [];

    for (const cardData of cardsData) {
      cards.push(new Card(cardData.title, cardData.estimative));
    }
    
    await connection.$pool.end();
    return cards;
  }
}

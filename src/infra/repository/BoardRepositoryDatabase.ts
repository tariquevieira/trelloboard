import Board from "../../domain/entity/Board";
import BoardRepository from "../../domain/repository/BoardRepository";
import Connection from "../database/Connection";

export default class BoardRepositoryDatabase implements BoardRepository {
  constructor(readonly connection: Connection) {

  }

  async findAll(): Promise<Board[]> {
    const boardsData = await this.connection.query("select * from branas.board", []);
    const boards: Board[] = [];

    for (const boardData of boardsData) {
      boards.push(new Board(boardData.name));
    }
    return boards;
  }
}

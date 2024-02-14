import Board from "../Entity/Board";
import pgp from "pg-promise";

export default class BoardService {
    constructor() {
    }

    async getBoards() {
        const connection = pgp()("postgres://postgres:1234@localhost:5434/app");
        const boardsData = await connection.query("select * from branas.board", []);
        const boards: Board[] = [];
    
        for (const boardData of boardsData) {
            boards.push(new Board(boardData.name));
        } 

        await connection.$pool.end();
        return boards;
    }
}
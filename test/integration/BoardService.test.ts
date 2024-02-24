import PgPromiseConnection from "../../src/infra/database/PgPromiseConnection"
import BoardRepositoryDatabase from "../../src/infra/repository/BoardRepositoryDatabase";
import CardRepositoryDatabase from "../../src/infra/repository/CardRepositoryDataBase";
import ColumnRepositoryDatabase from "../../src/infra/repository/ColumnRepositoryDatabase";
import BoardService from "../../src/service/BoardService";

test('should list all boards', async function () {
    const connection = new PgPromiseConnection();
    const boardRepository = new BoardRepositoryDatabase(connection);
    const columnRepository = new ColumnRepositoryDatabase(connection);
    const cardRepository = new CardRepositoryDatabase(connection);
    const boardService = new BoardService(boardRepository, cardRepository, columnRepository);
    const boards = await boardService.getBoards();
    expect(boards).toHaveLength(1);
})

test('should lit one board', async function () {
    const connection = new PgPromiseConnection();
    const boardRepository = new BoardRepositoryDatabase(connection);
    const columnRepository = new ColumnRepositoryDatabase(connection);
    const cardRepository = new CardRepositoryDatabase(connection);
    const boardService = new BoardService(boardRepository, cardRepository, columnRepository);

    const board = await boardService.getBoard(1);
    expect(board.name).toBe('Projeto 1');

})
import PgPromiseConnection from "../../src/infra/database/PgPromiseConnection"
import BoardRepositoryDatabase from "../../src/infra/repository/BoardRepositoryDatabase";
import BoardService from "../../src/service/BoardService";

test('should list all boards', async function () {
    const connection = new PgPromiseConnection();
    const boardRepository = new BoardRepositoryDatabase(connection);
    const boardService = new BoardService(boardRepository);
    const boards = await boardService.getBoards();
    expect(boards).toHaveLength(1);
})
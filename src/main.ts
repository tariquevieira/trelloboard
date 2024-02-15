import express from "express";
import BoardService from "./service/BoardService";
import ColumnService from "./service/ColumnService";
import CardService from "./service/CardService";
import PgPromiseConnection from "./infra/database/PgPromiseConnection";
import BoardRepositoryDatabase from "./infra/repository/BoardRepositoryDatabase";
import ColumnRepositoryDatabase from "./infra/repository/ColumnRepositoryDatabase";
import CardRepositoryDatabase from "./infra/repository/CardRepositoryDataBase";

const app = express();

const connection = new PgPromiseConnection();
const boardRepository = new BoardRepositoryDatabase(connection);
const columnRepository = new ColumnRepositoryDatabase(connection);
const cardRepository = new CardRepositoryDatabase(connection);

app.get('/boards', async (req, res) => {
    const boardService = new BoardService(boardRepository);
    const boards = await boardService.getBoards();
    res.json(boards);
});

app.get('/boards/:idBoard/columns', async (req, res) => {
    
    const columnService = new ColumnService(columnRepository);
    const columns = await columnService.getColumns(parseInt(req.params.idBoard));
    res.json(columns);
});

app.get('/boards/:idBoard/columns/:idColumn/cards', async (req, res) => {
    
    const cardService = new CardService(cardRepository);
    const cards = await cardService.getCards(parseInt(req.params.idColumn));
    res.json(cards);
});

app.listen(3000);

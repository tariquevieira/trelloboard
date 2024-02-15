import BoardRepository from "../domain/repository/BoardRepository";

export default class BoardService {
    constructor(readonly boardRepository: BoardRepository) {
    }

    async getBoards() {
        const boards = await this.boardRepository.findAll();
        return boards;
    }
}
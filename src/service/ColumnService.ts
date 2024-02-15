import ColumnRepository from "../domain/repository/ColumnRepository";

export default class ColumnService {
  constructor(readonly columnRespository: ColumnRepository) {}

  async getColumns(idBoard: number) {
    const columns = await this.columnRespository.findAllByIdBoard(idBoard);
    return columns;
  }
}

import Column from "../Entity/Column";
import pgp from "pg-promise";

export default class ColumnService {
  constructor() {}

  async getColumns(idBoard: number) {
    const connection = pgp()("postgres://postgres:1234@localhost:5434/app");
    const columnsData = await connection.query(
      "select * from branas.column where id_board = $1",
      [idBoard]
    );
    const columns: Column[] = [];

    for (const columnData of columnsData) {
      columns.push(new Column(columnData.name, columnData.has_estimative));
    }

    await connection.$pool.end();
    return columns;
  }
}

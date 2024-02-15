import Connection from "./Connection";
import pgp from "pg-promise";

export default class PgPromiseConnection implements Connection {

    connection: any;

    constructor() {
        this.connection = pgp()("postgres://postgres:1234@localhost:5434/app");
    }

    query(statment: string, params: any): Promise<any> {
        return this.connection.query(statment, params);
    }

    close(): Promise<void> {
        return this.connection.$pool.end();
    }

}
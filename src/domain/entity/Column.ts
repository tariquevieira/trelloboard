export default class Column {
    constructor (readonly name: string, readonly hasEstimative: boolean = false) {
        if (name === "") throw new Error("Name is required");
    }
}
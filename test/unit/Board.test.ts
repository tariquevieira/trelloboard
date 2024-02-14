import Board from "../../src/Entity/Board";

test("Deve criar um quadro", function() {
    const board = new Board("Projeto 1");
    expect(board.name).toBe("Projeto 1");
});

test("should't create card without title", function () {
    expect(()=> new Board("")).toThrow(new Error("Name is required"));
});
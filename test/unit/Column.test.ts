import Column from "../../src/Entity/Column";

test("Deve criar uma Coluna", function() {
    const column = new Column("Coluna A", true);
    expect(column.name).toBe("Coluna A");
    expect(column.hasEstimative).toBeTruthy();
})

test("should't create card without title", function () {
    expect(()=> new Column("", true)).toThrow(new Error("Name is required"));
});
import Card from "../../src/Entity/Card";

test("should create a new card", function () {
    const card = new Card("Atividade 1", 3);
    expect(card.title).toBe("Atividade 1");
    expect(card.estimative).toBe(3);
});

test("should't create card without title", function () {
    expect(()=> new Card("", 3)).toThrow(new Error("Title is required"));
});


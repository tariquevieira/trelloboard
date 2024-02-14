import axios from "axios"

test("should return all boards", async function(){
    const response = await axios({
        url: "http://localhost:3000/boards",
        method: "GET",
    });
    const boards = response.data;
    expect(boards).toHaveLength(1);
});

test("should return all columns by id board", async function(){
    const response = await axios({
        url: "http://localhost:3000/boards/1/columns",
        method: "GET",
    });

    const columns = response.data;
    expect(columns).toHaveLength(3);

    const [column1,column2,column3] = columns;
    expect(column1.name).toBe("Coluna A");
    expect(column2.name).toBe("Coluna B");
    expect(column3.name).toBe("Coluna C");
});

test("should return all columns by id board", async function(){
    const response = await axios({
        url: "http://localhost:3000/boards/1/columns/1/cards",
        method: "GET",
    });

    const cards = response.data;
    expect(cards).toHaveLength(2);

    const [card] = cards;
    console.log(cards);
    expect(card.title).toBe("atividade 1");
});
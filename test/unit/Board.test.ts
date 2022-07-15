
import Board from "../../src/domain/entity/Board";
import Card from "../../src/domain/entity/Card";
import Column from "../../src/domain/entity/Column";

test("Deve criar um quadro", function () {
	const board = new Board("Projeto 1");
	expect(board.name).toBe("Projeto 1");
});

test("Não deve criar um quadro sem nome", function () {
	expect(() => new Board("")).toThrow(new Error("Name is required"));
});

test("Deve criar um quadro com 3 colunas", function () {
	const board = new Board("Projeto 1");
	board.addColumn(new Column("Todo", true));
	board.addColumn(new Column("Doing", true));
	board.addColumn(new Column("Done", false));
	expect(board.columns).toHaveLength(3);
});

test("Deve criar um quadro com 3 colunas, adicionar cards e calcular a estimativa total", function () {
	const board = new Board("Projeto 1");
	board.addColumn(new Column("Todo", true));
	board.addColumn(new Column("Doing", true));
	board.addColumn(new Column("Done", false));
	board.addCard("Todo", new Card("Atividade 1", 3));
	board.addCard("Todo", new Card("Atividade 2", 2));
	board.addCard("Todo", new Card("Atividade 3", 1));
	const estimative = board.getEstimative();
	expect(estimative).toBe(6);
});

import Card from "./Card";
import Column from "./Column";

export default class Board {
	columns: Column[];

	constructor (readonly name: string) {
		if (name === "") throw new Error("Name is required");
		this.columns = [];
	}

	addColumn (column: Column) {
		this.columns.push(column);
	}

	addCard (columnName: string, card: Card) {
		const column = this.columns.find(column => column.name === columnName);
		if (!column) throw new Error("Column not found");
		column.addCard(card);
	}

	getEstimative () {
		return this.columns.reduce((total, column) => {
			total += column.getEstimative();
			return total;
		}, 0);
	}
}

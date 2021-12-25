export class Negociacao {
	/**
	 * If you create a private variable as a contructor argument
	 * ts makes it so the compiled js creates those variables as properties
	 * of the given class
	 */
	constructor(
		private _data: Date,
		private _quantidade: number,
		private _valor: number
	) {}

	get data(): Date {
		return this._data
	}

	get quantidade(): number {
		return this._quantidade
	}

	get valor(): number {
		return this._valor
	}

	get volume(): number {
		return this._quantidade * this._valor
	}
}

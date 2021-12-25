export class Negociacao {
	/**
	 * If you create a private variable as a contructor argument
	 * ts makes it so the compiled js creates those variables as properties
	 * of the given class
	 */
	constructor(
		private _data: Date,
		public readonly quantidade: number,
		public readonly valor: number
	) {}

	get volume(): number {
		return this.quantidade * this.valor
	}

	get data(): Date {
		const data = new Date(this._data.getTime())
		return data
	}
}

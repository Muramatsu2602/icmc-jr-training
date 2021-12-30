export class Negociacao {
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

	// a static method call be called directly from the class
	// not by its objets
	// ATTENTION: static methods are (of course) always PUBLIC!
	public static criaDe(
		dateString: string,
		quantityString: string,
		valueString: string
	): Negociacao {
		const exp = /-/g
		const date = new Date(dateString.replace(exp, ','))
		const quantidade = parseInt(quantityString)
		const valor = parseFloat(valueString)

		return new Negociacao(date, quantidade, valor)
	}
}

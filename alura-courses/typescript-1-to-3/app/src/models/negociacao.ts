import { Model } from '../interfaces/model.js'

export class Negociacao implements Model<Negociacao> {
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

	public static criaDe(
		dataString: string,
		quantidadeString: string,
		valorString: string
	): Negociacao {
		const exp = /-/g
		const date = new Date(dataString.replace(exp, ','))
		const quantidade = parseInt(quantidadeString)
		const valor = parseFloat(valorString)
		return new Negociacao(date, quantidade, valor)
	}

	public toText(): string {
		return `Data: ${this.data},\nQuantidade: ${this.quantidade},\nValor: ${this.valor}`
	}

	public ehIgual(negociacao: Negociacao): boolean {
		return (
			this.data.getDate() === negociacao.data.getDate() &&
			this.data.getMonth() === negociacao.data.getMonth() &&
			this.data.getFullYear() === negociacao.data.getFullYear()
		)
	}
}

// THIS IS POLIMORFISM
// const o: Printable = new Negociacao(new Date(), 1, 100)

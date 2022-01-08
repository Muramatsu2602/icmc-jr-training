import { Printable } from './../utils/printable.js'
import { Negociacao } from './negociacao.js'

export class Negociacoes implements Printable {
	private negociacoes: Negociacao[] = []

	public adiciona(negociacao: Negociacao) {
		this.negociacoes.push(negociacao)
	}

	public lista(): readonly Negociacao[] {
		return this.negociacoes
	}

	public toText(): string {
		return JSON.stringify(this.negociacoes, null)
	}
}

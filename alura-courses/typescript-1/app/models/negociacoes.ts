import { Negociacao } from './negociacao.js'

export class Negociacoes {
	// private negociacoes: Array<Negociacao> = []
	private negociacoes: Negociacao[] = []

	adiciona(negociacao: Negociacao) {
		this.negociacoes.push(negociacao)
	}

	lista(): readonly Negociacao[] {
		return this.negociacoes // take every item in this list and put in a NEW list
		                        // thus, the original negociacoes is NOT affected
	}
}

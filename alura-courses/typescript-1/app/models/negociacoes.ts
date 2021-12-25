import { Negociacao } from './negociacao.js'

export class Negociacoes {
	private negociacoes: Array<Negociacao> = []

	adiciona(negociacao: Negociacao) {
		this.negociacoes.push(negociacao)
	}

	lista(): ReadonlyArray<Negociacao> {
		return this.negociacoes // take every item in this list and put in a NEW list
                                // thus, the original negociacoes is NOT affected
	}
}

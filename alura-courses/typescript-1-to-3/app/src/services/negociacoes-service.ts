import { TodaysNegotiation } from '../interfaces/todays-negotiation.js'
import { Negociacao } from '../models/negociacao.js'

export class NegociacoesService {
	public obterNegociacoesDoDia(): Promise<Negociacao[]> {
		fetch('http://localhost:8080/dados')
			.then((res) => res.json())
			.then((dados: TodaysNegotiation[]) => {
				return dados.map((data) => {
					return new Negociacao(new Date(), data.vezes, data.montante)
				})
			})
	}
}

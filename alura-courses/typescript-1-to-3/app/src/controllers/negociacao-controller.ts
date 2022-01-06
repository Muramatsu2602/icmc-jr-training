import { TodaysNegotiation } from './../interfaces/todays-negotiation.js'
import { inspect } from '../decorators/inspect.js'
import { LogExecTime } from '../decorators/log-exec-time.js'
import { DiasDaSemana } from '../enums/dias-da-semana.js'
import { Negociacao } from '../models/negociacao.js'
import { Negociacoes } from '../models/negociacoes.js'
import { MensagemView } from '../views/mensagem-view.js'
import { NegociacoesView } from '../views/negociacoes-view.js'
import { domInjector } from '../decorators/dom-injector.js'

export class NegociacaoController {
	@domInjector('#data')
	private inputData: HTMLInputElement
	@domInjector('#quantidade')
	private inputQuantidade: HTMLInputElement
	@domInjector('#valor')
	private inputValor: HTMLInputElement

	private negociacoes = new Negociacoes()
	private negociacoesView = new NegociacoesView('#negociacoesView', true)
	private mensagemView = new MensagemView('#mensagemView')

	constructor() {
		this.negociacoesView.update(this.negociacoes)
	}

	@inspect
	@LogExecTime()
	public adiciona(): void {
		const negociacao = Negociacao.criaDe(
			this.inputData.value,
			this.inputQuantidade.value,
			this.inputValor.value
		)

		if (!this.ehDiaUtil(negociacao.data)) {
			this.mensagemView.update(
				'Apenas negociações em dias úteis são aceitas'
			)
			return
		}

		this.negociacoes.adiciona(negociacao)
		this.limparFormulario()
		this.atualizaView()
	}

	importaDados(): void {
		fetch('http://localhost:8080/dados')
			.then((res) => res.json())
			.then((dados: TodaysNegotiation[]) => {
				return dados.map((data) => {
					return new Negociacao(new Date(), data.vezes, data.montante)
				})
			})
			.then((negociacoesToday) => {
				for (let negociacao of negociacoesToday) {
					this.negociacoes.adiciona(negociacao)
				}
			})
	}

	private ehDiaUtil(data: Date) {
		return (
			data.getDay() > DiasDaSemana.DOMINGO &&
			data.getDay() < DiasDaSemana.SABADO
		)
	}

	private limparFormulario(): void {
		this.inputData.value = ''
		this.inputQuantidade.value = ''
		this.inputValor.value = ''
		this.inputData.focus()
	}

	private atualizaView(): void {
		this.negociacoesView.update(this.negociacoes)
		this.mensagemView.update('Negociação adicionada com sucesso')
	}
}

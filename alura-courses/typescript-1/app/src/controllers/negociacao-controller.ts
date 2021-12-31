import { Weekday } from './../enums/weekdays.js'
import { Negociacao } from '../models/negociacao.js'
import { Negociacoes } from '../models/negociacoes.js'
import { MensagemView } from '../views/mensagem-view.js'
import { NegociacoesView } from '../views/negociacoes-view.js'

export class NegociacaoController {
	private inputData: HTMLInputElement
	private inputQuantidade: HTMLInputElement
	private inputValor: HTMLInputElement
	private negociacoes = new Negociacoes()

	// views
	private negociacoesView = new NegociacoesView('#negociacoesView')
	private mensagemView = new MensagemView('#mensagemView')

	constructor() {
		this.inputData = document.querySelector('#data') as HTMLInputElement
		this.inputQuantidade = document.querySelector(
			'#quantidade'
		) as HTMLInputElement
		this.inputValor = document.querySelector('#valor') as HTMLInputElement
		this.negociacoesView.update(this.negociacoes)
	}

	public adiciona(): void {
		const negociacao = Negociacao.criaDe(
			this.inputData.value,
			this.inputQuantidade.value,
			this.inputValor.value
		)

		// testing if business days
		if (!this.isBusinessDay(negociacao.data)) {
			this.mensagemView.update(
				'Only negotiations done within business days are accepted!'
			)
			return
		}

		this.negociacoes.adiciona(negociacao)
		this.limparFormulario()
		this.atualizaView()
	}

	private isBusinessDay(date: Date): boolean {
		return (
			date.getDay() > Weekday.SUNDAY && date.getDay() < Weekday.SATURDAY
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
		this.mensagemView.update('Negociation created successfully')
	}
}

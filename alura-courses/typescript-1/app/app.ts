import { NegociacaoController } from './controllers/negociacao-controller.js' // ALWAYS place .js in the end

const controller = new NegociacaoController()
const form = document.querySelector('.form')

form.addEventListener('submit', (event: Event) => {
	event.preventDefault()
	controller.adiciona()
})

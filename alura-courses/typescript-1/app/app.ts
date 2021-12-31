import { NegociacaoController } from './controllers/negociacao-controller.js'

const controller = new NegociacaoController()
const form = document.querySelector('.form')

if (!form) {
	throw Error(
		'Application could not be initialized. Check whether it form exists'
	)
}

form.addEventListener('submit', (event) => {
	event.preventDefault()
	controller.adiciona()
})

// one variable --> multiple allowed data types
// const x: string | number | boolean = true

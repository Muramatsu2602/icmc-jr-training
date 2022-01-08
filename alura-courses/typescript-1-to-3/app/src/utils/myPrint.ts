import { Negociacao } from './../models/negociacao.js'

export function myPrint(...objects: any[]) {
	for (let object of objects) {
		console.log(object.toText())
	}
}

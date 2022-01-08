import { Negociacao } from './../models/negociacao.js'
import { Printable } from './printable.js'

export function myPrint(...objects: Printable[]) {
	for (let object of objects) {
		console.log(object.toText())
	}
}

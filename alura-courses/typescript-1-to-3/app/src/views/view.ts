import { inspect } from '../decorators/inspect.js'
import { LogExecTime } from '../decorators/log-exec-time.js'

export abstract class View<T> {
	protected elemento: HTMLElement
	private escapar = false

	constructor(seletor: string, escapar?: boolean) {
		const elemento = document.querySelector(seletor)
		if (elemento) {
			this.elemento = elemento as HTMLElement
		} else {
			throw Error(`Seletor ${seletor} não existe no DOM. Verifique`)
		}
		if (escapar) {
			this.escapar = escapar
		}
	}

	public update(model: T): void {
		let template = this.template(model)
		this.elemento.innerHTML = template
	}

	protected abstract template(model: T): string
}

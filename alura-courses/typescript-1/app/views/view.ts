export class View<T> {
	// protected --> inherited classes may access it
	protected element: HTMLElement

	constructor(seletor: string) {
		this.element = document.querySelector(seletor)
	}

	update(model: T): void {
		const template = this.template(model)
		this.element.innerHTML = template
	}

	template(model: T): string {
		throw Error('Child class must be implement template()')
	}
}

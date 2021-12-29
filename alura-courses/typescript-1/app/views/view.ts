export class View {
	// protected --> inherited classes may access it
	protected element: HTMLElement

	constructor(seletor: string) {
		this.element = document.querySelector(seletor)
	}

	update(model: string): void {
		const template = this.template(model)
		this.element.innerHTML = template
	}

	template(model: string): string {
		throw Error('Child class must be implement template()')
	}
}

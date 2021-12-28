export class View {
	// protected --> inherited classes may access it
	protected element: HTMLElement

	constructor(seletor: string) {
		this.element = document.querySelector(seletor)
	}
}

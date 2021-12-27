export class View {
	private element: HTMLElement

	constructor(seletor: string) {
		this.element = document.querySelector(seletor)
	}
}

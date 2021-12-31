// abstract --> cannot be initialized, but its children can
export abstract class View<T> {
	// protected --> inherited classes may access it
	protected element: HTMLElement
	private scape: boolean = false

	constructor(seletor: string, scape: boolean) {
		this.element = document.querySelector(seletor)
	}

	public update(model: T): void {
		let template = this.template(model)

		// protecting our template against
		// malicious scripts
		if (this.scape) {
			template = template.replace(/<script>[\s\S]*?<\/script>/, '')
		}
		this.element.innerHTML = template
	}

	protected abstract template(model: T): string
}

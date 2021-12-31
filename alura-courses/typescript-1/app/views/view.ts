// abstract --> cannot be initialized, but its children can
export abstract class View<T> {
	// protected --> inherited classes may access it
	protected element: HTMLElement
	private scape: boolean = false

	// ? --> optional parameter
	// WARNING: optional parameters should ALWAYS be the last ones in a method header
	constructor(seletor: string, scape?: boolean) {
		this.element = document.querySelector(seletor)

		// whenever we have an optional parameter, use this
		// otherwise, it will asume 'undefined'
		if (scape) this.scape = scape
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

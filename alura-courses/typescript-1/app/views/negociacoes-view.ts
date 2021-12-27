export class NegociacoesView {
	private elemento: HTMLElement

	constructor(seletor: string) {
		this.elemento = document.querySelector(seletor)
	}

	// returns HTML string + fused data
	template(): string {
		return `
        <table class="table table-hover table-bordered>
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </table>
        `
	}

	// render template in the captured element in constructor
	update(): void {
		this.elemento.innerHTML = this.template()
	}
}

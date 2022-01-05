export function domInjector(selector: string) {
	return function (target: any, propertyKey: string) {
		let element: HTMLElement | null = null

		const getter = function () {
			if (!element) {
				// we're assuming that element shall not be null
				const element = <HTMLElement>document.querySelector(selector)
			}

			return element
		}

		Object.defineProperty(target, propertyKey, {
			get: getter,
		})
	}
}

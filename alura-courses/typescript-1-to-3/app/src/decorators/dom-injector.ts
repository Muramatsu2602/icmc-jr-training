export function domInjector(selector: string) {
	return function (target: any, propertyKey: string) {
		const getter = function () {
			const element = document.querySelector(selector)
			return element
		}

		Object.defineProperty(target, propertyKey, {
			get: getter,
		})
	}
}

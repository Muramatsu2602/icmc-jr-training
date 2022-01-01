// my first ever decorator in TS
export function LogExecTime() {
	return function (
		target: any,
		propertyKey: string,
		descriptor: PropertyDescriptor
	) {
		const originalMethod = descriptor.value
		descriptor.value = function (...args: Array<any>) {
			const t1 = performance.now()
			const originalReturn = originalMethod.apply(this, args)
			const t2 = performance.now()
            
			console.log(`${propertyKey}, execution time: ${(t2 - t1) / 1000}`)
			originalReturn
		}

		return descriptor
	}
}

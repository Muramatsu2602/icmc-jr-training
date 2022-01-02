// my first ever decorator in TS
export function LogExecTime(inSeconds: boolean = false) {
	return function (
		target: any,
		propertyKey: string,
		descriptor: PropertyDescriptor
	) {
		const originalMethod = descriptor.value
		descriptor.value = function (...args: Array<any>) {
			let div = 1
			let un = 'milliseconds'
			if (inSeconds) {
				div = 1000
				un = 'seconds'
			}

			const t1 = performance.now()
			const originalReturn = originalMethod.apply(this, args)
			const t2 = performance.now()

			console.log(
				`${propertyKey}, execution time: ${(t2 - t1) / div} ${un}`
			)
            
			originalReturn
		}

		return descriptor
	}
}

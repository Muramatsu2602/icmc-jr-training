export function escape(
	target: any,
	propertyKey: string,
	descriptor: PropertyDescriptor
) {
	const originalMethod = descriptor.value
	descriptor.value = function (...args: any[]) {
		let originalReturn = originalMethod.apply(this, args)

		if (typeof originalReturn === 'string') {
			console.log(`@escape in action in class ${this.constructor.name}`)
			originalReturn = originalReturn.replace(
				/<script>[\s\S]*?<\/script>/,
				''
			)
		}

		return originalReturn
	}

	return descriptor
}

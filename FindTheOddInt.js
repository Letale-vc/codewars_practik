function findOdd(A) {
	const objectCount = A.reduce((acc, current) => {
		return { ...acc, [String(current)]: Object.keys(acc).length !== 0 && Object.keys(acc).find((el) => el === String(current)) ? acc[String(current)] + 1 : 1 }
	}, {})

	return Number.parseInt(
		Object.keys(objectCount).reduce((acc, current) => {
			if (!acc && objectCount[current] % 2 !== 0) {
				return current
			} else if (objectCount[current] % 2 !== 0 && objectCount[current] < objectCount[acc]) {
				return current
			} else return acc
		}, undefined)
	)
}

const findOdd2 = (xs) => xs.reduce((a, b) => a ^ b)

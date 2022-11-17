function dirReduc(arr) {
	return arr.reduce((acc, val, index) => {
		const changeAcc = acc

		let antiVal
		switch (val) {
			case 'NORTH':
				antiVal = 'SOUTH'
				break
			case 'SOUTH':
				antiVal = 'NORTH'
				break
			case 'WEST':
				antiVal = 'EAST'
				break
			case 'EAST':
				antiVal = 'WEST'
				break
		}

		if (changeAcc[changeAcc.length - 1] === antiVal) {
			acc.pop()
		}
		acc.push(val)
		return acc
	}, [])
}

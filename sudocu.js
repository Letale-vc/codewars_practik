function validSolution(board) {
	const validRow = (numberRow, numberCol, validArray) => {
		for (let i = 0; i < 8; i++) {
			if (i !== numberCol) {
				if (board[numberRow][i] === validArray) {
					return false
				}
			}
		}

		return true
	}
	const validCol = (numberRow, numberCol, validArray) => {
		for (let i = 0; i < 8; i++) {
			if (i !== numberRow) {
				if (board[i][numberCol] === validArray) {
					return false
				}
			}
		}

		return true
	}

	const validBox = (numberRow, numberCol, validArray) => {
		const startRow = numberRow - (numberRow % 3),
			startCol = numberCol - (numberCol % 3)

		for (let i = startRow; i < startRow + 3; i++) {
			for (let j = startCol; j < startCol + 3; j++) {
				if (i !== numberRow && j !== numberCol) {
					if (board[i][j] === validArray) {
						return false
					}
				}
			}
		}

		return true
	}

	for (let numberRow = 0; numberRow < 9; numberRow++) {
		for (let numberCol = 0; numberCol < 9; numberCol++) {
			const validArray = board[numberRow][numberCol]

			if (!validRow(numberRow, numberCol, validArray) || !validCol(numberRow, numberCol, validArray) || !validBox(numberRow, numberCol, validArray)) return false
		}
	}

	return true
}

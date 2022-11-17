const moveZeros = (arr) => [...arr.filter((x) => x !== 0), ...arr.filter((x) => x === 0)]

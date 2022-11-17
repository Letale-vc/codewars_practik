function solution(number) {
	if (Math.sign(number) < 1) {
		return 0
	}
	let result = 0
	for (let i = number-1; i > 0; i--) {
		
        if(i % 5 === 0 || i % 3 === 0){
			console.log(result)
            result += i
        }
		else if (i % 5 === 0 || i % 3 === 0) {
			result += i
			console.log(result)
		} 
	}
	return result
}

console.log(solution(10))

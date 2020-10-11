//Highest and Lowest
function highAndLow(numbers) {
	let sortedArr = numbers.split(" ").sort((num1, num2) => +num1 - +num2)
	return sortedArr.slice(-1)[0] + " " + sortedArr[0]
}

// You're a square!
function isSquare(n) {
	return Math.sqrt(n) % 1 === 0
}

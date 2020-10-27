//Highest and Lowest
function highAndLow(numbers) {
	let sortedArr = numbers.split(" ").sort((num1, num2) => +num1 - +num2)
	return sortedArr.slice(-1)[0] + " " + sortedArr[0]
}

// You're a square!
function isSquare(n) {
	return Math.sqrt(n) % 1 === 0
}

// Square Every Digit
function squareDigits(num) {
	return +Array.from(String(num), Number)
		.map((val) => val ** 2)
		.join("")
}

// Shortest Word
function findShort(s) {
	return s
		.split(" ")
		.map((val) => val.length)
		.sort((a, b) => a - b)[0]
}

// Find the Capitals
function capital(capitals) {
	return capitals.map((c) => `The capital of ${c.state || c.country} is ${c.capital}`)
}

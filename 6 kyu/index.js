// Decode the Morse code
decodeMorse = function (morseCode) {
	morseCode = morseCode.split("   ")
	solution = ""
	for (let i = 0; i < morseCode.length; i++) {
		word = morseCode[i]
		word = word.split(" ")
		for (let j = 0; j < word.length; j++) {
			if (MORSE_CODE[word[j]] !== undefined) {
				solution = solution + MORSE_CODE[word[j]]
			}
		}
		solution = solution + " "
	}

	return solution.trim()
}

// Character with longest consecutive repetition
function longestRepetition(s) {
	let longestConsecutiveChar = ""
	let longestLength = 0

	for (let i = 0; i < s.length; i++) {
		let newChar = s[i]
		let count = 0

		while (newChar === s[i]) {
			count += 1
			i += 1
		}
		i -= 1

		if (count > longestLength) {
			longestLength = count
			longestConsecutiveChar = newChar
		}
	}

	return [longestConsecutiveChar, longestLength]
}

//String transformer
function stringTransformer(str) {
	const allUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	return str
		.split("")
		.map((c) => (allUpperCase.indexOf(c) === -1 ? c.toUpperCase() : c.toLowerCase()))
		.join("")
		.split(" ")
		.reverse()
		.join(" ")
}

// New Cashier Does Not Know About Space or Shift
function getOrder(input) {
	let menu = ["Burger", "Fries", "Chicken", "Pizza", "Sandwich", "Onionrings", "Milkshake", "Coke"]
	let output = []
	let currWord = ""
	for (let i = 0; i < input.length; i++) {
		currWord += input[i]
		let found = menu.findIndex((menuItem) => currWord === menuItem.toLowerCase())
		if (found > -1) {
			output.push(menu[found])
			currWord = ""
		}
	}
	output.sort((a, b) => {
		return menu.indexOf(a) - menu.indexOf(b)
	})
	return output.join(" ")
}

// Find The Parity Outlier
function findOutlier(integers) {
	let evenNumbers = []
	let oddNumbers = []

	integers.filter((val) => {
		if (val % 2 === 0) {
			evenNumbers.push(val)
		} else {
			oddNumbers.push(val)
		}
	})
	if (oddNumbers.length === 1) {
		return oddNumbers[0]
	}
	if (evenNumbers.length === 1) {
		return evenNumbers[0]
	}
}

// More Zeros than Ones
function moreZeros(s) {
	let value = []
	for (var i = 0; i < s.length; i++) {
		let zeros = 0
		let ones = 0
		let sequence = s[i].charCodeAt(0).toString(2)
		for (j = 0; j < sequence.length; j++) {
			if (sequence[j] == 0) {
				zeros += 1
			} else {
				ones += 1
			}
		}
		if (zeros > ones) {
			value.push(s[i])
		}
	}
	let unique = [...new Set(value)]
	return unique
}

// Convert string to camel case
function toCamelCase(string) {
	const cleanedString = string.split(/[-_]/g)
	if (cleanedString[0].charAt(0) !== cleanedString[0].charAt(0).toUpperCase()) {
		const result = cleanedString
			.slice(1)
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		return [cleanedString[0], ...result].join("")
	} else {
		const result = cleanedString
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join("")
		return result
	}
}

// Simple frequency sort
function solve(arr) {
	let frequency = {}
	for (let i = 0; i < arr.length; i++) {
		if (frequency[arr[i]]) {
			frequency[arr[i]]++
		} else {
			frequency[arr[i]] = 1
		}
	}
	return arr.sort((a, b) => {
		if (frequency[b] !== frequency[a]) {
			return frequency[b] - frequency[a]
		} else if (frequency[b] === frequency[a]) {
			return a - b
		}
	})
}

// Build Tower
function towerBuilder(nFloors) {
	let spaces = []
	let asteriks = []
	let towers = []
	for (i = 1; i <= nFloors; i++) {
		spaces = " ".repeat(nFloors - i)
		asteriks = "*".repeat(2 * i - 1)
		towers.push(`${spaces}${asteriks}${spaces}`)
	}
	return towers
}

// Multiples of 3 or 5
function solution(number) {
	let ar = []
	for (let i = 1; i < number; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			ar.push(i)
		}
	}
	return ar.reduce((acc, val) => {
		return (acc += val)
	}, 0)
}

// Who likes it?
function likes(names) {
	if (names.length === 0) {
		return "no one likes this"
	} else if (names.length === 1) {
		return names[0] + " likes this"
	} else if (names.length === 2) {
		return names[0] + " and " + names[1] + " like this"
	} else if (names.length === 3) {
		return names[0] + ", " + names[1] + " and " + names[2] + " like this"
	} else {
		return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this"
	}
}

// Find the odd int
function findOdd(A) {
	let oddTimesNumber = 0
	A.forEach((val) => {
		let counter = 0
		for (let i = 0; i < A.length; i++) {
			if (val === A[i]) {
				counter++
			}
		}

		if (counter % 2 === 1) {
			oddTimesNumber = val
		}
	})
	return oddTimesNumber
}

// Count characters in your string
function count(string) {
	let splittedStringArray = string.split("")
	let countedStrObj = {}
	splittedStringArray.forEach(function (character) {
		let count = 0
		for (let j = 0; j < splittedStringArray.length; j++) {
			if (character === splittedStringArray[j]) count++

			countedStrObj[character] = count
		}
	})
	return countedStrObj
}

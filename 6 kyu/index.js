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

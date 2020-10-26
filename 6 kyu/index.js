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

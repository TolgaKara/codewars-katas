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

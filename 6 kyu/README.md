[Decode the Morse code](https://www.codewars.com/kata/54b724efac3d5402db00065e)

```javascript
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
```

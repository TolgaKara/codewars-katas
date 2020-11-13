[Decode the Morse code](https://www.codewars.com/kata/54b724efac3d5402db00065e)

```javascript
decodeMorse = function (morseCode) {
	morseCode = morseCode.split("   ");
	solution = "";
	for (let i = 0; i < morseCode.length; i++) {
		word = morseCode[i];
		word = word.split(" ");
		for (let j = 0; j < word.length; j++) {
			if (MORSE_CODE[word[j]] !== undefined) {
				solution = solution + MORSE_CODE[word[j]];
			}
		}
		solution = solution + " ";
	}

	return solution.trim();
};
```

[Character with longest consecutive repetition](https://www.codewars.com/kata/586d6cefbcc21eed7a001155)

```javascript
function longestRepetition(s) {
	let longestConsecutiveChar = "";
	let longestLength = 0;

	for (let i = 0; i < s.length; i++) {
		let newChar = s[i];
		let count = 0;

		while (newChar === s[i]) {
			count += 1;
			i += 1;
		}
		i -= 1;

		if (count > longestLength) {
			longestLength = count;
			longestConsecutiveChar = newChar;
		}
	}

	return [longestConsecutiveChar, longestLength];
}
```

[String transformer](https://www.codewars.com/kata/5878520d52628a092f0002d0)

```javascript
function stringTransformer(str) {
	const allUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	return str
		.split("")
		.map((c) => (allUpperCase.indexOf(c) === -1 ? c.toUpperCase() : c.toLowerCase()))
		.join("")
		.split(" ")
		.reverse()
		.join(" ");
}
```

[New Cashier Does Not Know About Space or Shift](https://www.codewars.com/kata/5d23d89906f92a00267bb83d)

```js
function getOrder(input) {
	let menu = ["Burger", "Fries", "Chicken", "Pizza", "Sandwich", "Onionrings", "Milkshake", "Coke"];
	let output = [];
	let currWord = "";
	for (let i = 0; i < input.length; i++) {
		currWord += input[i];
		let found = menu.findIndex((menuItem) => currWord === menuItem.toLowerCase());
		if (found > -1) {
			output.push(menu[found]);
			currWord = "";
		}
	}
	output.sort((a, b) => {
		return menu.indexOf(a) - menu.indexOf(b);
	});
	return output.join(" ");
}
```

[Find The Parity Outlier](https://www.codewars.com/kata/5526fc09a1bbd946250002dc)

```js
function findOutlier(integers) {
	let evenNumbers = [];
	let oddNumbers = [];

	integers.filter((val) => {
		if (val % 2 === 0) {
			evenNumbers.push(val);
		} else {
			oddNumbers.push(val);
		}
	});
	if (oddNumbers.length === 1) {
		return oddNumbers[0];
	}
	if (evenNumbers.length === 1) {
		return evenNumbers[0];
	}
}
```

[More Zeros than Ones](https://www.codewars.com/kata/5d41e16d8bad42002208fe1a)

```js
function moreZeros(s) {
	let value = [];
	for (var i = 0; i < s.length; i++) {
		let zeros = 0;
		let ones = 0;
		let sequence = s[i].charCodeAt(0).toString(2);
		for (j = 0; j < sequence.length; j++) {
			if (sequence[j] == 0) {
				zeros += 1;
			} else {
				ones += 1;
			}
		}
		if (zeros > ones) {
			value.push(s[i]);
		}
	}
	let unique = [...new Set(value)];
	return unique;
}
```

[Convert string to camel case](https://www.codewars.com/kata/517abf86da9663f1d2000003)

```js
function toCamelCase(string) {
	const cleanedString = string.split(/[-_]/g);
	if (cleanedString[0].charAt(0) !== cleanedString[0].charAt(0).toUpperCase()) {
		const result = cleanedString
			.slice(1)
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
		return [cleanedString[0], ...result].join("");
	} else {
		const result = cleanedString
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join("");
		return result;
	}
}
```

[Simple frequency sort](https://www.codewars.com/kata/5a8d2bf60025e9163c0000bc)

```js
function solve(arr) {
	let frequency = {};
	for (let i = 0; i < arr.length; i++) {
		if (frequency[arr[i]]) {
			frequency[arr[i]]++;
		} else {
			frequency[arr[i]] = 1;
		}
	}
	return arr.sort((a, b) => {
		if (frequency[b] !== frequency[a]) {
			return frequency[b] - frequency[a];
		} else if (frequency[b] === frequency[a]) {
			return a - b;
		}
	});
}
```

[Build Tower](https://www.codewars.com/kata/576757b1df89ecf5bd00073b)

```js
function towerBuilder(nFloors) {
	let spaces = [];
	let asteriks = [];
	let towers = [];
	for (i = 1; i <= nFloors; i++) {
		spaces = " ".repeat(nFloors - i);
		asteriks = "*".repeat(2 * i - 1);
		towers.push(`${spaces}${asteriks}${spaces}`);
	}
	return towers;
}
```

[Multiples of 3 or 5](https://www.codewars.com/kata/514b92a657cdc65150000006)

```js
function solution(number) {
	let ar = [];
	for (let i = 1; i < number; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			ar.push(i);
		}
	}
	return ar.reduce((acc, val) => {
		return (acc += val);
	}, 0);
}
```

[Who likes it?](https://www.codewars.com/kata/5266876b8f4bf2da9b000362)

```js
function likes(names) {
	if (names.length === 0) {
		return "no one likes this";
	} else if (names.length === 1) {
		return names[0] + " likes this";
	} else if (names.length === 2) {
		return names[0] + " and " + names[1] + " like this";
	} else if (names.length === 3) {
		return names[0] + ", " + names[1] + " and " + names[2] + " like this";
	} else {
		return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
	}
}
```

[Find the odd int](https://www.codewars.com/kata/54da5a58ea159efa38000836)

```js
function findOdd(A) {
	let oddTimesNumber = 0;
	A.forEach((val) => {
		let counter = 0;
		for (let i = 0; i < A.length; i++) {
			if (val === A[i]) {
				counter++;
			}
		}

		if (counter % 2 === 1) {
			oddTimesNumber = val;
		}
	});
	return oddTimesNumber;
}
```

[Count characters in your string](https://www.codewars.com/kata/52efefcbcdf57161d4000091)

```js
function count(string) {
	let splittedStringArray = string.split("");
	let countedStrObj = {};
	splittedStringArray.forEach(function (character) {
		let count = 0;
		for (let j = 0; j < splittedStringArray.length; j++) {
			if (character === splittedStringArray[j]) count++;

			countedStrObj[character] = count;
		}
	});
	return countedStrObj;
}
```

### [Format a string of names like 'Bart, Lisa & Maggie'.](https://www.codewars.com/kata/53368a47e38700bd8300030d)

```js
function list(names) {
	const lastNameIndex = names.length - 1;

	return names
		.reduce((acc, val, index) => {
			if (lastNameIndex === index && lastNameIndex > 0) {
				return acc + " & " + val.name;
			}
			return acc + ", " + val.name;
		}, "")
		.slice(2);
}
```

### [Two Sum](https://www.codewars.com/kata/52c31f8e6605bcc646000082)

```js
function twoSum(numbers, target) {
	let sum = 0;
	let indexArr = [];
	for (let i = 0; i < numbers.length; i++) {
		for (let x = i + 1; x < numbers.length; x++) {
			if (numbers[x] === target - numbers[i]) {
				return [i, x];
			}
		}
	}
}
```

### [Backspaces in string](https://www.codewars.com/kata/5727bb0fe81185ae62000ae3)

```js
function cleanString(s) {
	s = s.split("");
	for (let i = 0; i < s.length; i++) {
		if (s[i] === "#") {
			s[i] = "";
			s[i - 1] = "";
			s = s.filter((v) => v !== "");
			i -= 2;
		}
	}
	return s.join("");
}
```

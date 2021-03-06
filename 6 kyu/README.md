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

### [Does my number look big in this?](https://www.codewars.com/kata/5287e858c6b5a9678200083c)

```js
function narcissistic(value) {
	return (
		value
			.toString()
			.split("")
			.reduce((sum, number, index, { length }) => {
				return sum + Math.pow(number, length);
			}, 0) == value
	);
}
```

[Create Phone Number](https://www.codewars.com/kata/525f50e3b73515a6db000b83)

```js
function createPhoneNumber(numbers) {
	let firstThree = numbers.slice(0, 3).join("");
	let secondThreeNumbers = numbers.slice(3, 6).join("");
	let lastDigits = numbers.slice(6).join("");

	return `(${firstThree}) ${secondThreeNumbers}-${lastDigits}`;
}
```

[Fat Fingers](https://www.codewars.com/kata/5aa99584fd5777ee9a0001f1)

```js
var fatFingers = function (str) {
	if (!str) return str;

	let isCaps = false;
	let solution = str.split("").reduce((acc, character) => {
		if (character.toUpperCase() === "A") {
			isCaps = !isCaps;
			return acc;
		}

		if (isCaps) {
			character =
				character === character.toUpperCase() ? character.toLowerCase() : character.toUpperCase();
		}

		acc += character;
		return acc;
	}, "");

	return solution;
};
```

[Take a Ten Minute Walk](https://www.codewars.com/kata/54da539698b8a2ad76000228)

```js
function isValidWalk(walk) {
	if (walk.length != 10) return false;
	const counts = {
		n: 0,
		e: 0,
		s: 0,
		w: 0,
	};

	for (let i = 0; i < walk.length; i++) {
		const direction = walk[i];
		counts[direction]++;
	}

	return counts.n - counts.s == 0 && counts.w - counts.e == 0;
}
```

[IQ Test](https://www.codewars.com/kata/552c028c030765286c00007d)

```js
function iqTest(numbers) {
	numbers = numbers.split(" ");
	const even = {
		count: 0,
		lastIndex: -1,
	};
	const odd = {
		count: 0,
		lastIndex: -1,
	};

	for (let i = 0; i < numbers.length; i++) {
		const currentNumber = numbers[i];
		if (currentNumber % 2 == 0) {
			even.count++;
			even.lastIndex = i + 1;
		} else {
			odd.count++;
			odd.lastIndex = i + 1;
		}
	}

	if (even.count == 1) {
		return even.lastIndex;
	} else {
		return odd.lastIndex;
	}
}
```

[Equal Sides Of An Array](https://www.codewars.com/kata/5679aa472b8f57fb8c000047)

```js
function findEvenIndex(arr) {
	const sumSubArr = (arr, startIndex, lastIndex) => {
		let sum = 0;
		for (let i = startIndex; i < lastIndex; i++) {
			sum += arr[i];
		}
		return sum;
	};

	for (let i = 0; i < arr.length; i++) {
		const leftSum = sumSubArr(arr, 0, i);
		const rightSum = sumSubArr(arr, i + 1, arr.length);

		if (leftSum == rightSum) {
			return i;
		}
	}

	return -1;
}
```

[Counting Duplicates](https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1)

```js
function duplicateCount(text) {
	text = text.toLowerCase().split("");
	let counter = 0;
	const occurences = {};
	text.map((char) => {
		occurences[char] = 0;
	});

	text.map((char) => {
		occurences[char]++;
	});

	for (occur in occurences) {
		let appearNumber = occurences[occur];
		if (appearNumber > 1) {
			counter++;
		}
	}
	return counter;
}
```

[Detect Pangram](https://www.codewars.com/kata/545cedaa9943f7fe7b000048)

```js
function isPangram(string) {
	let alphabet = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
	];
	string = string.toLowerCase();
	return alphabet.filter((val) => string.includes(val)).length === 26 ? true : false;
}
```

[Sum of Digits / Digital Root](https://www.codewars.com/kata/541c8630095125aba6000c00)

```js
function digital_root(n) {
	let numArr = ("" + n).split("");
	let solInt = 0;
	solInt = numArr.reduce((acc, val) => acc + +val, 0);
	while (solInt >= 10) {
		solInt = ("" + solInt).split("").reduce((acc, val) => acc + +val, 0);
	}
	return solInt;
}
```

[Is a number prime?](https://www.codewars.com/kata/5262119038c0985a5b00029f)

```js
function isPrime(n) {
	if (n < 2) return false;

	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) return false;
	}
	return true;
}
```

[Playing with digits](https://www.codewars.com/kata/5552101f47fc5178b1000050)

```js
function digPow(n, p) {
	let newP = 0;
	let result = ("" + n)
		.split("")
		.map((number, index) => {
			newP = p + index;
			return number ** newP;
		})
		.reduce((acc, num) => (acc += num));
	return Number.isInteger(result / n) ? result / n : -1;
}
```

[Roman Numerals Encoder](https://www.codewars.com/kata/51b62bf6a9c58071c600001b)

```js
function solution(number) {
	const romanObj = {
		1: "I",
		4: "IV",
		5: "V",
		9: "IX",
		10: "X",
		40: "XL",
		50: "L",
		90: "XC",
		100: "C",
		400: "CD",
		500: "D",
		600: "DC",
		900: "CM",
		1000: "M",
	};

	let roman = "";
	const keys = Object.keys(romanObj);
	while (number > 0) {
		for (let i = keys.length - 1; i >= 0; i--) {
			if (number >= keys[i]) {
				while (number >= keys[i]) {
					roman += romanObj[keys[i]];
					number -= keys[i];
				}
				keys.pop();
				break;
			}
		}
	}
	return roman;
}
```

[Dubstep](https://www.codewars.com/kata/551dc350bf4e526099000ae5)

```js
function songDecoder(song) {
	return song
		.split("WUB")
		.filter((word) => word.trim())
		.join(" ");
}
```

[Reverse polish notation calculator](https://www.codewars.com/kata/52f78966747862fc9a0009ae)

```js
function calc(expr) {
	const inputArr = expr.split(" ");
	const stack = [];

	const operations = {
		"+": (a, b) => a + b,
		"-": (a, b) => a - b,
		"*": (a, b) => a * b,
		"/": (a, b) => a / b,
	};

	for (let i = 0; i < inputArr.length; i++) {
		const token = inputArr[i];
		if (operations[token]) {
			const rightVal = stack.pop();
			const leftVal = stack.pop();
			const result = operations[token](+leftVal, +rightVal);
			stack.push(result);
		} else {
			stack.push(token);
		}
	}
	return +stack.pop();
}
```

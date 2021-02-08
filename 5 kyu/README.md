[Valid Parentheses](https://www.codewars.com/kata/52774a314c2333f0a7000688)

```javascript
function validParentheses(parens) {
	let arr = [];
	for (let i = 0; i < parens.length; i += 1) {
		if (parens[i] === ")") {
			if (arr.length <= 0) {
				return false;
			} else {
				arr.shift();
			}
		}
		if (parens[i] === "(") {
			arr.push(")");
		}
	}

	return arr.length ? false : true;
}
```

[Pete, the baker](https://www.codewars.com/kata/525c65e51bf619685c000059)

```js
function cakes(recipe, available) {
	let currentRecipe = Object.entries(recipe);
	let storage = Object.entries(available);
	let possibleCakes = [];
	let counter = 0;
	for (let i = 0; i < currentRecipe.length; i++) {
		for (let j = 0; j < storage.length; j++) {
			if (storage[j][0].includes(currentRecipe[i][0]) === true) {
				counter += 1;
				let newNumber = Math.floor(storage[j][1] / currentRecipe[i][1]);
				possibleCakes.push(newNumber);
			}
		}
	}
	if (counter < currentRecipe.length) {
		return 0;
	}
	return Math.min(...possibleCakes);
}
```

[Moving Zeros To The End](https://www.codewars.com/kata/52597aa56021e91c93000cb0)

```js
var moveZeros = function (arr) {
	const arrWithZeros = [];
	const arrWithoutZeros = [];

	arr.map((number) => {
		if (number === 0) {
			arrWithZeros.push(number);
		} else {
			arrWithoutZeros.push(number);
		}
	});

	return arrWithoutZeros.concat(arrWithZeros);
};
```

[Sum of pairs](https://www.codewars.com/kata/54d81488b981293527000c8f)

```js
function sumPairs(ints, s) {
	const hashInts = {};

	const result = ints
		.map((num) => {
			if (s - num in hashInts) {
				return [s - num, num];
			} else {
				hashInts[num] = true;
			}
		})
		.filter((val) => val)[0];

	return result || undefined;
}
```

[Simple Pig Latin](https://www.codewars.com/kata/520b9d2ad5c005041100000f)

```js
function pigIt(str) {
	const strArr = str.split(" ");

	return strArr
		.map((word) => {
			if (word === "!" || word === "?" || word === ".") return word;
			return word.slice(1) + word[0] + "ay";
		})
		.join(" ");
}
```

[Calculating with Functions](https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39)

```js
const zero = (mathOperation) => (!mathOperation ? 0 : mathOperation(0));
const one = (mathOperation) => (!mathOperation ? 1 : mathOperation(1));
const two = (mathOperation) => (!mathOperation ? 2 : mathOperation(2));
const three = (mathOperation) => (!mathOperation ? 3 : mathOperation(3));
const four = (mathOperation) => (!mathOperation ? 4 : mathOperation(4));
const five = (mathOperation) => (!mathOperation ? 5 : mathOperation(5));
const six = (mathOperation) => (!mathOperation ? 6 : mathOperation(6));
const seven = (mathOperation) => (!mathOperation ? 7 : mathOperation(7));
const eight = (mathOperation) => (!mathOperation ? 8 : mathOperation(8));
const nine = (mathOperation) => (!mathOperation ? 9 : mathOperation(9));

const plus = (number) => (secNumber) => secNumber + number;
const minus = (number) => (secNumber) => secNumber - number;
const times = (number) => (secNumber) => secNumber * number;
const dividedBy = (number) => (secNumber) => Math.floor(secNumber / number);
```

[Where my anagrams at?](https://www.codewars.com/kata/523a86aa4230ebb5420001e1)

```js
const countLetters = (word) =>
	Array.prototype.reduce.call(
		word,
		(counts, letter) => {
			letter = letter.toLowerCase();
			counts[letter] = counts[letter] || 0;
			counts[letter]++;
			return counts;
		},
		{}
	);

const looseEqual = (obj1, obj2) => {
	const obj1Keys = Object.keys(obj1);
	const obj2Keys = Object.keys(obj2);
	if (obj1Keys.length != obj2Keys.length) {
		return false;
	}
	return obj1Keys.every((key) => obj1[key] === obj2[key]);
};

function anagrams(word, words) {
	const letterCount = countLetters(word);
	return words.filter((currentWord) => looseEqual(letterCount, countLetters(currentWord)));
}
```

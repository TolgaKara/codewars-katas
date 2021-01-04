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

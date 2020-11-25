# 7 Kyu

### [Highest and Lowest](https://www.codewars.com/kata/554b4ac871d6813a03000035)

```javascript
function highAndLow(numbers) {
	let sortedArr = numbers.split(" ").sort((num1, num2) => +num1 - +num2);
	return sortedArr.slice(-1)[0] + " " + sortedArr[0];
}
```

### [You're a square!](https://www.codewars.com/kata/54c27a33fb7da0db0100040e)

```javascript
function isSquare(n) {
	return Math.sqrt(n) % 1 === 0;
}
```

### [Square Every Digit](https://www.codewars.com/kata/546e2562b03326a88e000020)

```javascript
function squareDigits(num) {
	return +Array.from(String(num), Number)
		.map((val) => val ** 2)
		.join("");
}
```

### [Shortest Word](https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/)

```javascript
function findShort(s) {
	return s
		.split(" ")
		.map((val) => val.length)
		.sort((a, b) => a - b)[0];
}
```

### [Find the Capitals](https://www.codewars.com/kata/53573877d5493b4d6e00050c)

```js
function capital(capitals) {
	return capitals.map((c) => `The capital of ${c.state || c.country} is ${c.capital}`);
}
```

### [Count number of zeros from 1 to N](https://www.codewars.com/kata/557cffec8c3e8e55cc00010f)

```js
function countZeros(n) {
	let str = "";
	for (let i = 9; i <= n; i++) {
		str += i.toString();
	}
	return str.split("0").length - 1;
}
```

[Get the Middle Character](https://www.codewars.com/kata/56747fd5cb988479af000028)

```js
function getMiddle(s) {
	let sArr = s.split("");
	let middleInddex = s.length / 2;
	if (s.length % 2 == 0) {
		return sArr[middleInddex - 1] + sArr[middleInddex];
	} else {
		return sArr[Math.floor(middleInddex)];
	}
}
```

[Jaden Casing Strings](https://www.codewars.com/kata/5390bac347d09b7da40006f6)

```js
String.prototype.toJadenCase = function () {
	return this.toString()
		.split(" ")
		.map((val) => val[0].toUpperCase() + val.slice(1))
		.join(" ");
};

var str = "How can mirrors be real if our eyes aren't real";
var jadenStr = str.toJadenCase();
```

[Vowel Count](https://www.codewars.com/kata/54ff3102c1bad923760001f3)

```js
function getCount(str) {
	let vowelsCount = 0;
	const vowels = ["a", "e", "i", "o", "u"];
	let strArr = str.split("");

	strArr.forEach((val) => {
		if (vowels.includes(val)) {
			vowelsCount += 1;
		}
		return vowelsCount;
	});
	return vowelsCount;
}
```

[Unlucky Days](https://www.codewars.com/kata/56eb0be52caf798c630013c0)

```js
const date = new Date();
date.getDay();

function unluckyDays(year) {
	let date;
	let counter = 0;
	for (let i = 1; i <= 12; i++) {
		date = new Date(`${i}/13/${year}`);
		if (date.getDay() === 5) counter++;
	}
	return counter;
}
```

[Filter Coffee](https://www.codewars.com/kata/56069d0c4af7f633910000d3)

```js
function search(budget, prices) {
	if (budget === 0) {
		return "";
	}
	let sortedPrices = prices.sort((a, b) => a - b);
	let affordables = [];
	sortedPrices.forEach((val, index) => {
		if (budget >= val) {
			affordables.push(val);
		}
	});
	return affordables.join(",");
}
```

[Simple Fun #144: Distinct Digit Year](https://www.codewars.com/kata/58aa68605aab54a26c0001a6)

```js
function distinctDigitYear(year) {
	let totalDigit = 1;
	let uniqueDigit = 2;

	while (totalDigit != uniqueDigit) {
		year++;
		totalDigit = year.toString().length;
		uniqueDigit = new Set(year.toString()).size;
	}
	return year;
}
```

[Simple Fun #144: Distinct Digit Year](https://www.codewars.com/kata/58aa68605aab54a26c0001a6)

```js
function distinctDigitYear(year) {
	let totalDigit = 1;
	let uniqueDigit = 2;

	while (totalDigit != uniqueDigit) {
		year++;
		totalDigit = year.toString().length;
		uniqueDigit = new Set(year.toString()).size;
	}
	return year;
}
```

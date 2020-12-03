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

[Find all pairs](https://www.codewars.com/kata/5c55ad8c9d76d41a62b4ede3)

```js
function duplicates(array) {
	//Make the magic happen
	let pairsNumber = [];
	let pairCounter = 0;
	array.forEach((num) => {
		if (pairsNumber[num] !== num) {
			pairsNumber[num] = num;
		} else {
			pairsNumber[num] = undefined;
			pairCounter++;
		}
	});
	return pairCounter;
}
```

[Ordered Count of Characters](https://www.codewars.com/kata/57a6633153ba33189e000074)

```js
var orderedCount = (text) => {
	let x = text.split("");
	let dic = {};
	let res = [];
	let finalRes = [];

	x.forEach((letter, idx) => {
		!dic[letter] ? (dic[letter] = [1, idx]) : (dic[letter][0] += 1);
	});
	for (letter in dic) {
		res.push([letter, dic[letter]]);
	}
	let sortedRes = res.sort(function (a, b) {
		return a[1][1] - b[1][1];
	});
	sortedRes.forEach((letter) => {
		finalRes.push([letter[0], letter[1][0]]);
	});
	return finalRes;
};
```

[The Office VI - Sabbatical](https://www.codewars.com/kata/57fe50d000d05166720000b1)

```js
function sabb(x, val, happ) {
	x = (x.match(/[sabticl]/gi) || []).length;
	return x + val + happ > 22 ? "Sabbatical! Boom!" : "Back to your desk, boy.";
}
```

[Divide and Conquer](https://www.codewars.com/kata/57eaec5608fed543d6000021)

```js
function divCon(x) {
	let sumIntNumber = 0;
	let sumStrNumber = 0;
	x.forEach((number) => {
		if (typeof number === "string") {
			sumStrNumber += parseInt(number);
		} else {
			sumIntNumber += number;
		}
	});
	return (sumIntNumber -= sumStrNumber);
}
```

[Most sales](https://www.codewars.com/kata/5e16ffb7297fe00001114824)

```js
function top3(products, amounts, prices) {
	let emptyArr = [];
	let revenue = products.map((v, i) => {
		return prices[i] * amounts[i];
	});
	for (let i = 0; i < 3; i++) {
		emptyArr.push(products[revenue.indexOf(Math.max(...revenue))]);
		revenue[revenue.indexOf(Math.max(...revenue))] = -1;
	}
	return emptyArr;
}
```

[Credit Card Mask](https://www.codewars.com/kata/5412509bd436bd33920011bc)

```js
function maskify(cc) {
	let lengthOfCC = cc.length;
	if (lengthOfCC === 0) {
		return "";
	} else if (lengthOfCC === 1) {
		return cc;
	} else {
		let firstXNumber = cc.slice(0, -4).split("");
		let newHashNumber = "";
		for (let x of firstXNumber) {
			newHashNumber += "#";
		}
		return newHashNumber + cc.slice(-4);
	}
}
```

# 7 Kyu

### [Highest and Lowest](https://www.codewars.com/kata/554b4ac871d6813a03000035)

```javascript
function highAndLow(numbers) {
	let sortedArr = numbers.split(" ").sort((num1, num2) => +num1 - +num2)
	return sortedArr.slice(-1)[0] + " " + sortedArr[0]
}
```

### [You're a square!](https://www.codewars.com/kata/54c27a33fb7da0db0100040e)

```javascript
function isSquare(n) {
	return Math.sqrt(n) % 1 === 0
}
```

### [Square Every Digit](https://www.codewars.com/kata/546e2562b03326a88e000020)

```javascript
function squareDigits(num) {
	return +Array.from(String(num), Number)
		.map((val) => val ** 2)
		.join("")
}
```

### [Shortest Word](https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/)

```javascript
function findShort(s) {
	return s
		.split(" ")
		.map((val) => val.length)
		.sort((a, b) => a - b)[0]
}
```

### [Find the Capitals](https://www.codewars.com/kata/53573877d5493b4d6e00050c)

```js
function capital(capitals) {
	return capitals.map((c) => `The capital of ${c.state || c.country} is ${c.capital}`)
}
```

### [Count number of zeros from 1 to N](https://www.codewars.com/kata/557cffec8c3e8e55cc00010f)

```js
function countZeros(n) {
	let str = ""
	for (let i = 9; i <= n; i++) {
		str += i.toString()
	}
	return str.split("0").length - 1
}
```

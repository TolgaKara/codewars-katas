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

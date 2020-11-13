//Highest and Lowest
function highAndLow(numbers) {
	let sortedArr = numbers.split(" ").sort((num1, num2) => +num1 - +num2);
	return sortedArr.slice(-1)[0] + " " + sortedArr[0];
}

// You're a square!
function isSquare(n) {
	return Math.sqrt(n) % 1 === 0;
}

// Square Every Digit
function squareDigits(num) {
	return +Array.from(String(num), Number)
		.map((val) => val ** 2)
		.join("");
}

// Shortest Word
function findShort(s) {
	return s
		.split(" ")
		.map((val) => val.length)
		.sort((a, b) => a - b)[0];
}

// Find the Capitals
function capital(capitals) {
	return capitals.map((c) => `The capital of ${c.state || c.country} is ${c.capital}`);
}

// Count number of zeros from 1 to N
function countZeros(n) {
	let str = "";
	for (let i = 9; i <= n; i++) {
		str += i.toString();
	}
	return str.split("0").length - 1;
}

// Get the Middle Character
function getMiddle(s) {
	let sArr = s.split("");
	let middleInddex = s.length / 2;
	if (s.length % 2 == 0) {
		return sArr[middleInddex - 1] + sArr[middleInddex];
	} else {
		return sArr[Math.floor(middleInddex)];
	}
}

// Jaden Casing Strings
String.prototype.toJadenCase = function () {
	return this.toString()
		.split(" ")
		.map((val) => val[0].toUpperCase() + val.slice(1))
		.join(" ");
};

var str = "How can mirrors be real if our eyes aren't real";
var jadenStr = str.toJadenCase();

// Vowel Count
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

// Unlucky Days
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

// Filter Coffee
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

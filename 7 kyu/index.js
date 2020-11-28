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

// Simple Fun #144: Distinct Digit Year

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

// Simple Fun #144: Distinct Digit Year
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

// Find all pairs
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

// Ordered Count of Characters
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

// The Office VI - Sabbatical
function sabb(x, val, happ) {
	x = (x.match(/[sabticl]/gi) || []).length;
	return x + val + happ > 22 ? "Sabbatical! Boom!" : "Back to your desk, boy.";
}

// Divide and Conquer
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

// Most sales
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

// Credit Card Mask
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

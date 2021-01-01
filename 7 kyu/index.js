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

// The Office III - Broken Photocopier
function broken(x) {
	let newBinNumber = x.split("").map((binNumber) => {
		if (+binNumber === 1) {
			return 0;
		} else {
			return 1;
		}
	});
	return newBinNumber.join("");
}

// The Office II - Boredom Score
function boredom(staff) {
	let boredomScoreByJob = {
		accounts: 1,
		finance: 2,
		canteen: 10,
		regulation: 3,
		trading: 6,
		change: 6,
		IS: 8,
		retail: 5,
		cleaning: 4,
		"pissing about": 25,
	};

	let sum = 0;
	for (let kollegen in staff) {
		let staffJobMember = staff[kollegen];

		if (boredomScoreByJob.hasOwnProperty(staffJobMember)) {
			sum += boredomScoreByJob[staff[kollegen]];
		}
	}

	if (sum <= 80) {
		return "kill me now";
	} else if (sum < 100 && sum > 80) {
		return "i can handle this";
	} else {
		return "party time!!";
	}
}

// Turkish Numbers, 0-99
const getTurkishNumber = (num) => {
	num = num.toString();
	let word = "";
	const number = {
		0: "sıfır",
		1: "bir",
		2: "iki",
		3: "üç",
		4: "dört",
		5: "beş",
		6: "altı",
		7: "yedi",
		8: "sekiz",
		9: "dokuz",
	};
	const tensNumber = {
		10: "on",
		20: "yirmi",
		30: "otuz",
		40: "kırk",
		50: "elli",
		60: "altmış",
		70: "yetmiş",
		80: "seksen",
		90: "doksan",
	};

	if (num < 10) {
		for (let key in number) {
			if (num === key) {
				return number[key];
			}
		}
	} else {
		for (let tensKey in tensNumber) {
			if (num[0] == tensKey[0]) {
				word += tensNumber[tensKey];
			}
		}

		for (let key in number) {
			if (num[1] === key) {
				if (num[1] === "0") {
					break;
				}
				word += " " + number[key];
			}
		}
	}
	return word;
};

// The Office I - Outed
function outed(meet, boss) {
	let sum = 0;
	let count = Object.keys(meet).length;

	for (let key in meet) {
		if (key === boss) {
			sum += meet[key] * 2;
		} else {
			sum += meet[key];
		}
	}

	let mean = sum / count;
	console.log(mean);

	if (mean <= 5) {
		return "Get Out Now!";
	} else {
		return "Nice Work Champ!";
	}
}

// Pandemia 🌡️
function infected(s) {
	s = s.split("X");

	let totalInf = 0;
	let totalPeop = 0;
	let emptyArr = [];
	for (let i = 0; i < s.length; i++) {
		if (s[i].includes("1")) {
			emptyArr.push(s[i].replace(/0/g, "1"));
			totalInf += s[i].length;
		} else {
			emptyArr.push(s[i]);
			totalPeop += s[i].length;
		}
	}
	totalPeop += totalInf;
	let newStr = emptyArr.join("X");

	if (Object.is(NaN, (totalInf / totalPeop) * 100)) {
		return 0;
	}

	return (totalInf / totalPeop) * 100;
}

infected("01000000X000X011X0X");
infected("01X000X010X011XX");
infected("XXXXX");

// Descending Order
function descendingOrder(n) {
	const numberArray = Array.from(String(n), Number);
	return +numberArray.sort((a, b) => b - a).join("");
}

// Binary Addition
function addBinary(a, b) {
	const sum = a + b;
	return numberToBinary(sum);
}
let numberToBinary = (sum) => {
	if (sum === 0) {
		return 0;
	}

	let binary = "";
	while (sum > 0) {
		const remainder = sum % 2;
		binary = remainder + binary;
		sum = Math.floor(sum / 2);
	}
	return binary;
};

// Unique numbers
function uniqueNumbers(numbersArray) {
	uniqueArray = [];
	numbersArray.map((val) => {
		if (!uniqueArray.includes(val)) {
			uniqueArray.push(val);
		}
	});
	return uniqueArray;
}

// Alternate capitalization
function capitalize(s) {
	return [
		s
			.split("")
			.map((character, index) => {
				if (index % 2 === 0) {
					return character.toUpperCase();
				} else {
					return character.toLowerCase();
				}
			})
			.join(""),
		s
			.split("")
			.map((character, index) => {
				if (index % 2 !== 0) {
					return character.toUpperCase();
				} else {
					return character.toLowerCase();
				}
			})
			.join(""),
	];
}

// Alternate case
function alternateCase(s) {
	return s
		.split("")
		.map((c) => (c !== c.toLowerCase() ? c.toLowerCase() : c.toUpperCase()))
		.join("");
}

// Remove duplicate words
function removeDuplicateWords(s) {
	return [...new Set(s.split(" "))].join(" ");
}

// Greet Me
var greet = function (name) {
	const properName = name[0].toUpperCase() + name.slice(1).toLowerCase();
	return `Hello ${properName}!`;
};

// Predict your age!
function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
	const ages = [age1, age2, age3, age4, age5, age6, age7, age8];
	return Math.floor(Math.sqrt(ages.map((age) => age * age).reduce((acc, val) => acc + val)) / 2);
}

// Testing 1-2-3
var number = function (array) {
	return array.map((line, index) => `${index + 1}: ${line}`);
};

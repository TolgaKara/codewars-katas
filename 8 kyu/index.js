//filter out the geese
function gooseFilter(birds) {
	var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

	const filteredBirds = birds.filter(function (bird) {
		console.log(bird);
		if (!geese.includes(bird)) {
			return bird;
		}
	});
	return filteredBirds;
}

// Counting sheep...
function countSheeps(arrayOfSheep) {
	const amountOfSheep = arrayOfSheep.filter(function (sheep) {
		if (sheep) {
			return sheep;
		}
	});
	return amountOfSheep.length;
}

// Hello, Name or World!
function hello(name) {
	if (name === undefined || name.length === 0) {
		name = "World";
	}
	name = name.toLowerCase();
	name = name.charAt(0).toUpperCase() + name.slice(1);
	return "Hello, " + name + "!";
}

// Returning Strings
function greet(name) {
	return `Hello, ${name} how are you doing today?`;
}

// Grasshopper - Function syntax debugging
function main(verb, noun) {
	return verb + noun;
}

// Grasshopper - Debug sayHello
function sayHello(name) {
	return `Hello, ${name}`;
}

// Even or Odd
function even_or_odd(number) {
	let calcNumber = number % 2;

	if (calcNumber == 0) {
		return "Even";
	} else {
		return "Odd";
	}
}

// Sum of positive
function positiveSum(arr) {
	let sum = 0;

	if (arr.length === 0) {
		return 0;
	}

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			sum += arr[i];
		} else {
			continue;
		}
	}
	return sum;
}

// Basic variable assignment
var a = "code";
var b = "wa.rs";
var name = a + b;

// Simple Comparison?
function add(a, b) {
	if (a == b) {
		return true;
	} else {
		return false;
	}
}

// Area or Perimeter
const areaOrPerimeter = function (l, w) {
	if (l === w) {
		return l * w;
	} else {
		return 2 * (l + w);
	}
};

// Total amount of points
function points(games) {
	let sum = 0;
	for (let i = 0; i < games.length; i++) {
		let x = parseInt(games[i][0]);
		let y = parseInt(games[i][2]);

		if (x > y) {
			sum += 3;
		}
		if (x < y) {
			sum += 0;
		}
		if (x == y) {
			sum += 1;
		}
	}
	return sum;
}

// Smallest unused ID
function nextId(ids) {
	console.log(ids.length);
	for (let i = 0; i < ids.length; i++) {
		if (ids.indexOf(i) === -1) {
			return i;
		}
	}
	return ids.length;
}

// Student's Final Grade
function finalGrade(exam, projects) {
	if (exam > 90 || projects > 10) return 100;
	if ((exam > 75) & (projects >= 5)) return 90;
	if ((exam > 50) & (projects >= 2)) return 75;
	return 0;
}

// Beginner Series #2 Clock
function past(h, m, s) {
	let hour = 3600000 * h;
	let minute = 60000 * m;
	let second = 1000 * s;
	return hour + minute + second;
}

// Find Maximum and Minimum Values of a List
var min = function (list) {
	return Math.min(...list);
};

var max = function (list) {
	return Math.max(...list);
};

// Are You Playing Banjo?
function areYouPlayingBanjo(name) {
	return name.toUpperCase().charAt(0) === "R"
		? name + " plays banjo"
		: name + " does not play banjo";
}

// You only need one - Beginner
function check(a, x) {
	return a.includes(x);
}

// Get Planet Name By ID
function getPlanetName(id) {
	var name;
	switch (id) {
		case 1:
			name = "Mercury";
			break;
		case 2:
			name = "Venus";
			break;
		case 3:
			name = "Earth";
			break;
		case 4:
			name = "Mars";
			break;
		case 5:
			name = "Jupiter";
			break;
		case 6:
			name = "Saturn";
			break;
		case 7:
			name = "Uranus";
			break;
		case 8:
			name = "Neptune";
			break;
	}

	return name;
}

// Sum Arrays
function sum(numbers) {
	if (numbers.length === 0) {
		return 0;
	}
	return numbers.reduce((acc, val) => {
		return (acc += val);
	}, 0);
}

// DNA to RNA Conversion
function DNAtoRNA(dna) {
	return dna
		.split("")
		.map((val) => (val === "T" ? "U" : val))
		.join("");
}

// Fake Binary
function fakeBin(x) {
	return x
		.split("")
		.map((val) => (val < 5 ? 0 : 1))
		.join("");
}

// Do I get a bonus?
function bonusTime(salary, bonus) {
	return bonus ? "\u00A3" + salary.toString() + "0" : "\u00A3" + salary.toString();
}

// You Can't Code Under Pressure #1
function doubleInteger(i) {
	return i * 2;
}

// Calculate average
function find_average(array) {
	return (
		array.reduce((acc, val, index, { length }) => {
			return (acc += val);
		}, 0) / array.length
	);
	return 0;
}

// Count the Monkeys!
function monkeyCount(n) {
	let numberArr = [];
	for (let i = 1; i <= n; i++) {
		numberArr.push(i);
	}
	return numberArr;
}

// Count of positives / sum of negatives
function countPositivesSumNegatives(input) {
	if (!input || input.length === 0) return [];

	const positives = input.filter((number) => Math.sign(number) === 1).reduce((a) => a + 1, 0);

	const negatives = input.filter((number) => Math.sign(number) === -1).reduce((a, b) => a + b, 0);

	return [positives, negatives];
}

// Abbreviate a Two Word Name
function abbrevName(name) {
	let nameArr = name.split(" ");
	return nameArr[0].slice(0, 1).toUpperCase() + "." + nameArr[1].slice(0, 1).toUpperCase();
}

// Beginner - Lost Without a Map
function maps(x) {
	return x.map((val) => val * 2);
}

// Jenny's secret message
function greet(name) {
	if (name === "Johnny") {
		return "Hello, my love!";
	} else {
		return "Hello, " + name + "!";
	}
}

// Convert number to reversed array of digits
function digitize(n) {
	return n
		.toString()
		.split("")
		.reverse()
		.map((val) => +val);
}

// Century From Year
function century(year) {
	return year % 100 === 0 ? year / 100 : Math.floor(year / 100 + 1);
}

// A Needle in the Haystack
function findNeedle(haystack) {
	for (let i = 0; i < haystack.length; i++) {
		if (haystack[i] === "needle") {
			return "found the needle at position " + i;
		}
	}
}

// Convert a String to a Number!
var stringToNumber = function (str) {
	return +str;
};

// Is n divisible by x and y?
function isDivisible(n, x, y) {
	return n % x === 0 && n % y === 0;
}

// Keep Hydrated!
function litres(time) {
	return Math.floor(time * 0.5);
}

// Basic Mathematical Operations
function basicOp(operation, value1, value2) {
	if (operation === "+") {
		return value1 + value2;
	} else if (operation === "-") {
		return value1 - value2;
	} else if (operation === "*") {
		return value1 * value2;
	} else {
		return value1 / value2;
	}
}

// Square(n) Sum
function squareSum(numbers) {
	let sum = 0;
	numbers.forEach((num) => {
		sum += num * num;
	});
	return sum;
}

// Remove String Spaces
function noSpace(x) {
	return x.split(" ").join("");
}

// Convert boolean values to strings 'Yes' or 'No'.
function boolToWord(bool) {
	return bool ? "Yes" : "No";
}

// Reversed Strings
function solution(str) {
	return str.split("").reverse().join("");
}

// Convert a Number to a String!
function numberToString(num) {
	return num.toString();
}

// Find the smallest integer in the array
class SmallestIntegerFinder {
	findSmallestInt(args) {
		return args.sort((a, b) => a - b)[0];
	}
}

// Return Negative

function makeNegative(num) {
	console.log(num);
	if (num < 0) {
		return num;
	}
	return -num;
}

// Opposite number

function opposite(number) {
	if (number < 0) {
		return Math.abs(number);
	} else {
		return number * -1;
	}
}

// Grasshopper - Object syntax debug
var rooms = {
	first: {
		description: "This is the first room",
		items: {
			chair: "The old chair looks comfortable",
			lamp: "This lamp looks ancient",
		},
	},
	second: {
		description: "This is the second room",
		items: {
			couch: "This couch looks like it would hurt your back",
			table: "On the table there is an unopened bottle of water",
		},
	},
};

// Grasshopper - Basic Function Fixer
function addFive(num) {
	var total = num + 5;
	return total;
}

// Grasshopper - Terminal Game Turn Function
function doTurn() {
	rollDice();
	move();
	combat();
	getCoins();
	buyHealth();
	printStatus();
}

// Grasshopper - Terminal Game #1
function Hero(name) {
	return {
		name: name || "Hero",
		position: "00",
		health: 100,
		damage: 5,
		experience: 0,
	};
}

// Grasshopper - Grade book
function getGrade(s1, s2, s3) {
	let score = (s1 + s2 + s3) / 3;
	if (score >= 90 && score <= 100) {
		return "A";
	} else if (score >= 80 && score < 90) {
		return "B";
	} else if (score >= 70 && score < 80) {
		return "C";
	} else if (score >= 60 && score < 70) {
		return "D";
	} else if (score >= 0 && score < 60) {
		return "F";
	}
}

// Grasshopper - Terminal game combat function
function combat(health, damage) {
	let currentHealth = health - damage;
	return currentHealth < 0 ? 0 : currentHealth;
}

// Grasshopper - Terminal game move function
function move(position, roll) {
	return position + roll * 2;
}

// Grasshopper - Summation
var summation = function (num) {
	let sum = 0;
	for (let i = 0; i <= num; i++) {
		sum += i;
	}
	return sum;
};

// Grasshopper - Messi goals function
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
	return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// Grasshopper - Personalized Message
function greet(name, owner) {
	if (name === owner) {
		return "Hello boss";
	} else {
		return "Hello guest";
	}
}

// Grasshopper - Check for factor
function checkForFactor(base, factor) {
	let multipliedFactor = base * factor;
	if (base % factor === 0) {
		return true;
	} else {
		return false;
	}
}

// Function 1 - hello world
// Write a function "greet" that returns "hello world!"
function greet() {
	return "hello world!";
}

// Grasshopper - Variable Assignment Debug
var a = "dev";
var b = "Lab";
var name = a + b;

// Grasshopper - Combine strings
let combineNames = (firstName, lastName) => {
	return `${firstName} ${lastName}`;
};

// Grasshopper - Create the rooms
var rooms = {
	firstRoom: {
		name: "Dunkele Kammer 1",
		description: "Baby level",
		completed: true,
	},
	secRoom: {
		name: "Dunkele Kammer 2",
		description: "Adult level",
		completed: false,
	},
	thirdRoom: {
		name: "Dunkele Kammer 3",
		description: "Grand level",
		completed: false,
	},
};

// Welcome!

function greet(language) {
	const database = {
		english: "Welcome",
		czech: "Vitejte",
		danish: "Velkomst",
		dutch: "Welkom",
		estonian: "Tere tulemast",
		finnish: "Tervetuloa",
		flemish: "Welgekomen",
		french: "Bienvenue",
		german: "Willkommen",
		irish: "Failte",
		italian: "Benvenuto",
		latvian: "Gaidits",
		lithuanian: "Laukiamas",
		polish: "Witamy",
		spanish: "Bienvenido",
		swedish: "Valkommen",
		welsh: "Croeso",
	};
	return database[language] || database["english"];
}

// Parse float
function parseF(s) {
	if (parseFloat(s) === 0) {
		return 0;
	}
	return parseFloat(s) || null;
}

// Mumbling
function accum(s) {
	s = s.split("");
	return s
		.reduce((acc, val, index) => {
			let lowerRepeatStr = val.toLowerCase().repeat(index);
			acc += lowerRepeatStr.charAt(0).toUpperCase() + lowerRepeatStr.slice(0) + "-";
			return acc;
		}, s[0].toUpperCase())
		.slice(0, -1);
}

// Grasshopper - Messi Goals
const laLigaGoals = 43;
const championsLeagueGoals = 10;
const copaDelReyGoals = 5;
let totalGoals = 0;
totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;

// Beginner Series #4 Cockroach
function cockroachSpeed(s) {
	if (s === 0) {
		return 0;
	}
	return Math.floor(s / 0.036);
}

// String repeat
function repeatStr(n, s) {
	let newString = "";
	for (let i = 0; i < n; i++) {
		newString += s;
	}
	return newString;
}

// Correct the mistakes of the character recognition software

function correct(string) {
	string = string.replace(/5|0|1/g, (matchedLetter) => {
		if (matchedLetter === "5") {
			return "S";
		} else if (matchedLetter === "0") {
			return "O";
		}
		return "I";
	});
	return string;
}

// Removing Elements
function removeEveryOther(arr) {
	let counter = 0;
	for (let i = 0; i < arr.length; i++) {
		if (counter >= 1) {
			arr.splice(i, 1);
			counter = 0;
		}
		counter++;
	}
	return arr;
}

// Remove First and Last Character
function removeChar(str) {
	return str.slice(1, -1);
}

// A bugs trilogy: Episode 1 - "Let Math.Random(); decide your future"
function yourFutureCareer() {
	var career = Math.random();
	if (career <= 0.32) {
		return "FrontEnd Developer";
	} else if (career <= 0.65) {
		return "BackEnd Developer";
	} else {
		return "Full-Stack Developer";
	}
}
yourFutureCareer();

// Filling an array (part 1)
const arr = (N) => {
	const emptyArr = [];
	for (let i = 0; i < N; i++) {
		emptyArr[i] = i;
	}
	return emptyArr;
};

// Capitalization and Mutability
function capitalizeWord(word) {
	return word[0].toUpperCase() + word.slice(1);
}

// Get the mean of an array
function getAverage(marks) {
	let sumArr = marks.reduce((acc, val) => {
		return (acc += val);
	}, 0);

	return Math.floor(sumArr / marks.length);
}

// Grasshopper - Debug
function weatherInfo(temp) {
	var c = convertToCelsius(temp);
	if (c <= 0) return c + " is freezing temperature";
	else return c + " is above freezing temperature";
}

function convertToCelsius(temperature) {
	var celsius = (temperature - 32) * (5 / 9);
	return celsius;
}

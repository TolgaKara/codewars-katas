# 8 Kyu

### [Filter out the geese](https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7)

```javascript
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
```

### [Counting sheep...](https://www.codewars.com/kata/54edbc7200b811e956000556)

```javascript
function countSheeps(arrayOfSheep) {
	const amountOfSheep = arrayOfSheep.filter(function (sheep) {
		if (sheep) {
			return sheep;
		}
	});
	return amountOfSheep.length;
}
```

### [Hello, Name or World!](https://www.codewars.com/kata/57e3f79c9cb119374600046b)

```javascript
function hello(name) {
	if (name === undefined || name.length === 0) {
		name = "World";
	}
	name = name.toLowerCase();
	name = name.charAt(0).toUpperCase() + name.slice(1);
	return "Hello, " + name + "!";
}
```

### [Returning Strings](https://www.codewars.com/kata/55a70521798b14d4750000a4)

```javascript
function greet(name) {
	return `Hello, ${name} how are you doing today?`;
}
```

### [Grasshopper - Function syntax debugging](https://www.codewars.com/kata/56dae9dc54c0acd29d00109a)

```javascript
function main(verb, noun) {
	return verb + noun;
}
```

### [Grasshopper - Debug sayHello](https://www.codewars.com/kata/5625618b1fe21ab49f00001f)

```javascript
function sayHello(name) {
	return `Hello, ${name}`;
}
```

### [Even or Odd](https://www.codewars.com/kata/53da3dbb4a5168369a0000fe)

```javascript
function even_or_odd(number) {
	let calcNumber = number % 2;

	if (calcNumber == 0) {
		return "Even";
	} else {
		return "Odd";
	}
}
```

### [Sum of positive](https://www.codewars.com/kata/5715eaedb436cf5606000381)

```javascript
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
```

### [Basic variable assignment](https://www.codewars.com/kata/50ee6b0bdeab583673000025)

```javascript
var a = "code";
var b = "wa.rs";
var name = a + b;
```

### [Simple Comparison?](https://www.codewars.com/kata/57f6ecdfcca6e045d2001207)

```javascript
function add(a, b) {
	if (a == b) {
		return true;
	} else {
		return false;
	}
}
```

### [Area or Perimeter](https://www.codewars.com/kata/5ab6538b379d20ad880000ab)

```javascript
const areaOrPerimeter = function (l, w) {
	if (l === w) {
		return l * w;
	} else {
		return 2 * (l + w);
	}
};
```

### [Total amount of points](https://www.codewars.com/kata/5bb904724c47249b10000131)

```javascript
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
```

### [Smallest unused ID](https://www.codewars.com/kata/55eea63119278d571d00006a)

```javascript
function nextId(ids) {
	console.log(ids.length);
	for (let i = 0; i < ids.length; i++) {
		if (ids.indexOf(i) === -1) {
			return i;
		}
	}
	return ids.length;
}
```

### [Student's Final Grade](https://www.codewars.com/kata/5ad0d8356165e63c140014d4)

```javascript
function finalGrade(exam, projects) {
	if (exam > 90 || projects > 10) return 100;
	if ((exam > 75) & (projects >= 5)) return 90;
	if ((exam > 50) & (projects >= 2)) return 75;
	return 0;
}
```

### [Beginner Series #2 Clock](https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a)

```js
function past(h, m, s) {
	let hour = 3600000 * h;
	let minute = 60000 * m;
	let second = 1000 * s;
	return hour + minute + second;
}
```

### [Find Maximum and Minimum Values of a List](https://www.codewars.com/kata/577a98a6ae28071780000989)

```js
var min = function (list) {
	return Math.min(...list);
};

var max = function (list) {
	return Math.max(...list);
};
```

### [Are You Playing Banjo?](https://www.codewars.com/kata/53af2b8861023f1d88000832)

```js
function areYouPlayingBanjo(name) {
	return name.toUpperCase().charAt(0) === "R"
		? name + " plays banjo"
		: name + " does not play banjo";
}
```

[You only need one - Beginner](https://www.codewars.com/kata/57cc975ed542d3148f00015b)

```js
function check(a, x) {
	return a.includes(x);
}
```

[Get Planet Name By ID](https://www.codewars.com/kata/515e188a311df01cba000003)

```js
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
```

[Sum Arrays](https://www.codewars.com/kata/53dc54212259ed3d4f00071c)

```js
function sum(numbers) {
	if (numbers.length === 0) {
		return 0;
	}
	return numbers.reduce((acc, val) => {
		return (acc += val);
	}, 0);
}
```

### [DNA to RNA Conversion](https://www.codewars.com/kata/5556282156230d0e5e000089)

```js
function DNAtoRNA(dna) {
	return dna
		.split("")
		.map((val) => (val === "T" ? "U" : val))
		.join("");
}
```

### [Fake Binary](https://www.codewars.com/kata/57eae65a4321032ce000002d)

```js
function fakeBin(x) {
	return x
		.split("")
		.map((val) => (val < 5 ? 0 : 1))
		.join("");
}
```

### [Do I get a bonus?](https://www.codewars.com/kata/56f6ad906b88de513f000d96)

```js
function bonusTime(salary, bonus) {
	return bonus ? "\u00A3" + salary.toString() + "0" : "\u00A3" + salary.toString();
}
```

### [You Can't Code Under Pressure #1](https://www.codewars.com/kata/53ee5429ba190077850011d4)

```js
function doubleInteger(i) {
	return i * 2;
}
```

### [Calculate average](https://www.codewars.com/kata/57a2013acf1fa5bfc4000921)

```js
function find_average(array) {
	return (
		array.reduce((acc, val, index, { length }) => {
			return (acc += val);
		}, 0) / array.length
	);
	return 0;
}
```

### [Count the Monkeys!](https://www.codewars.com/kata/56f69d9f9400f508fb000ba7)

```js
function monkeyCount(n) {
	let numberArr = [];
	for (let i = 1; i <= n; i++) {
		numberArr.push(i);
	}
	return numberArr;
}
```

### [Count of positives / sum of negatives](https://www.codewars.com/kata/576bb71bbbcf0951d5000044)

```js
function countPositivesSumNegatives(input) {
	if (!input || input.length === 0) return [];

	const positives = input.filter((number) => Math.sign(number) === 1).reduce((a) => a + 1, 0);

	const negatives = input.filter((number) => Math.sign(number) === -1).reduce((a, b) => a + b, 0);

	return [positives, negatives];
}
```

### [Abbreviate a Two Word Name](https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3)

```js
function abbrevName(name) {
	let nameArr = name.split(" ");
	return nameArr[0].slice(0, 1).toUpperCase() + "." + nameArr[1].slice(0, 1).toUpperCase();
}
```

[Beginner - Lost Without a Map](https://www.codewars.com/kata/57f781872e3d8ca2a000007e)

```js
function maps(x) {
	return x.map((val) => val * 2);
}
```

[Jenny's secret message](https://www.codewars.com/kata/55225023e1be1ec8bc000390)

```js
function greet(name) {
	if (name === "Johnny") {
		return "Hello, my love!";
	} else {
		return "Hello, " + name + "!";
	}
}
```

[Convert number to reversed array of digits](https://www.codewars.com/kata/5583090cbe83f4fd8c000051)

```js
function digitize(n) {
	return n
		.toString()
		.split("")
		.reverse()
		.map((val) => +val);
}
```

[Century From Year](https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097)

```js
function century(year) {
	return year % 100 === 0 ? year / 100 : Math.floor(year / 100 + 1);
}
```

[A Needle in the Haystack](https://www.codewars.com/kata/56676e8fabd2d1ff3000000c)

```js
function findNeedle(haystack) {
	for (let i = 0; i < haystack.length; i++) {
		if (haystack[i] === "needle") {
			return "found the needle at position " + i;
		}
	}
}
```

[Convert a String to a Number!](https://www.codewars.com/kata/544675c6f971f7399a000e79)

```js
var stringToNumber = function (str) {
	return +str;
};
```

[Is n divisible by x and y?](https://www.codewars.com/kata/5545f109004975ea66000086)

```js
function isDivisible(n, x, y) {
	return n % x === 0 && n % y === 0;
}
```

[Keep Hydrated!](https://www.codewars.com/kata/582cb0224e56e068d800003c)

```js
function litres(time) {
	return Math.floor(time * 0.5);
}
```

[Basic Mathematical Operations](https://www.codewars.com/kata/57356c55867b9b7a60000bd7)

```js
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
```

[Square n Sum](https://www.codewars.com/kata/515e271a311df0350d00000f)

```js
function squareSum(numbers) {
	let sum = 0;
	numbers.forEach((num) => {
		sum += num * num;
	});
	return sum;
}
```

[Remove String Spaces](https://www.codewars.com/kata/57eae20f5500ad98e50002c5)

```js
function noSpace(x) {
	return x.split(" ").join("");
}
```

[Convert boolean values to strings 'Yes' or 'No'.](https://www.codewars.com/kata/53369039d7ab3ac506000467)

```js
function boolToWord(bool) {
	return bool ? "Yes" : "No";
}
```

[Reversed Strings](https://www.codewars.com/kata/5168bb5dfe9a00b126000018)

```js
function solution(str) {
	return str.split("").reverse().join("");
}
```

[Convert a Number to a String!](https://www.codewars.com/kata/5265326f5fda8eb1160004c8)

```js
function numberToString(num) {
	return num.toString();
}
```

[Find the smallest integer in the array](https://www.codewars.com/kata/55a2d7ebe362935a210000b2)

```js
class SmallestIntegerFinder {
	findSmallestInt(args) {
		return args.sort((a, b) => a - b)[0];
	}
}
```

[Return Negative](https://www.codewars.com/kata/55685cd7ad70877c23000102)

```js
function makeNegative(num) {
	console.log(num);
	if (num < 0) {
		return num;
	}
	return -num;
}
```

[Opposite number](https://www.codewars.com/kata/56dec885c54a926dcd001095)

```js
function opposite(number) {
if (number < 0) {
return Math.abs(number);
} else {
return number \* -1;
}
}
```

[Grasshopper - Object syntax debug](https://www.codewars.com/kata/56d8ae9237123036d3001b54)

```js
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
```

[Grasshopper - Basic Function Fixer](https://www.codewars.com/kata/56200d610758762fb0000002)

```js
function addFive(num) {
	var total = num + 5;
	return total;
}
```

[Grasshopper - Terminal Game Turn Function](https://www.codewars.com/kata/56019d3b2c39ccde76000086)

```js
function doTurn() {
	rollDice();
	move();
	combat();
	getCoins();
	buyHealth();
	printStatus();
}
```

[Grasshopper - Terminal Game #1](https://www.codewars.com/kata/55e8aba23d399a59500000ce)

```js
function Hero(name) {
	return {
		name: name || "Hero",
		position: "00",
		health: 100,
		damage: 5,
		experience: 0,
	};
}
```

[Grasshopper - Grade book](https://www.codewars.com/kata/55cbd4ba903825f7970000f5)

```js
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
```

[Grasshopper - Terminal game combat function](https://www.codewars.com/kata/586c1cf4b98de0399300001d)

```js
function combat(health, damage) {
	let currentHealth = health - damage;
	return currentHealth < 0 ? 0 : currentHealth;
}
```

[Grasshopper - Terminal game move function](https://www.codewars.com/kata/563a631f7cbbc236cf0000c2)

```js
function move(position, roll) {
	return position + roll * 2;
}
```

[Grasshopper - Summation](https://www.codewars.com/kata/55d24f55d7dd296eb9000030)

```js
var summation = function (num) {
	let sum = 0;
	for (let i = 0; i <= num; i++) {
		sum += i;
	}
	return sum;
};
```

[Grasshopper - Messi goals function](https://www.codewars.com/kata/55f73be6e12baaa5900000d4)

```js
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
	return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}
```

[Grasshopper - Personalized Message](https://www.codewars.com/kata/5772da22b89313a4d50012f7)

```js
function greet(name, owner) {
	if (name === owner) {
		return "Hello boss";
	} else {
		return "Hello guest";
	}
}
```

[Grasshopper - Check for factor](https://www.codewars.com/kata/55cbc3586671f6aa070000fb)

```js
function checkForFactor(base, factor) {
	let multipliedFactor = base * factor;
	if (base % factor === 0) {
		return true;
	} else {
		return false;
	}
}
```

[Function 1 - hello world](https://www.codewars.com/kata/523b4ff7adca849afe000035)

```js
// Write a function "greet" that returns "hello world!"
function greet() {
	return "hello world!";
}
```

[Grasshopper - Variable Assignment Debug](https://www.codewars.com/kata/5612e743cab69fec6d000077)

```js
var a = "dev";
var b = "Lab";
var name = a + b;
```

[Grasshopper - Combine strings](https://www.codewars.com/kata/55f73f66d160f1f1db000059)

```js
let combineNames = (firstName, lastName) => {
	return `${firstName} ${lastName}`;
};
```

[Grasshopper - Create the rooms](https://www.codewars.com/kata/56a29b237e9e997ff2000048)

```js
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
```

[Welcome!](https://www.codewars.com/kata/577ff15ad648a14b780000e7)

```js
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
```

[Parse float](https://www.codewars.com/kata/57a386117cb1f31890000039)

```js
function parseF(s) {
	if (parseFloat(s) === 0) {
		return 0;
	}
	return parseFloat(s) || null;
}
```

[Mumbling](https://www.codewars.com/kata/5667e8f4e3f572a8f2000039)

```js
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
```

[Grasshopper - Messi Goals](https://www.codewars.com/kata/55ca77fa094a2af31f00002a)

```js
const laLigaGoals = 43;
const championsLeagueGoals = 10;
const copaDelReyGoals = 5;

let totalGoals = 0;
totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;
```

[Beginner Series #4 Cockroach](https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6)

```js
function cockroachSpeed(s) {
	if (s === 0) {
		return 0;
	}
	return Math.floor(s / 0.036);
}
```

[String repeat](https://www.codewars.com/kata/57a0e5c372292dd76d000d7e)

```js
function repeatStr(n, s) {
	let newString = "";
	for (let i = 0; i < n; i++) {
		newString += s;
	}
	return newString;
}
```

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

[The Office III - Broken Photocopier](https://www.codewars.com/kata/57ed56657b45ef922300002b)

```js
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
```

[The Office II - Boredom Score](https://www.codewars.com/kata/57ed4cef7b45ef8774000014)

```js
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
```

[Turkish Numbers, 0-99]()

`````js
const getTurkishNumber = (num) => {
  num = num.toString()
  let word = ''
  const number = {
  0 : 'sıfır',
  1 : 'bir',
  2 : 'iki',
  3 : 'üç',
  4 : 'dört',
  5 : 'beş',
  6 : 'altı',
  7 : 'yedi',
  8 : 'sekiz',
  9 : 'dokuz'
  }
  const tensNumber = {
  10 : 'on',
  20 : 'yirmi',
  30 : 'otuz',
  40 : 'kırk',
  50 : 'elli',
  60 : 'altmış',
  70 : 'yetmiş',
  80 : 'seksen',
  90 : 'doksan'
}


  if(num<10){
    for(let key in number){
      if(num === key){
        return number[key]
      }
    }
  }else {
    for(let tensKey in tensNumber){
      if(num[0] == tensKey[0]){
        word += tensNumber[tensKey]

      }````
    for(let key in number){
      if(num[1] === key){
        if(num[1] === '0'){
          break
        }
        word += ' ' + number[key]
      }
    }
  }
  return word
}
`````

[The Office I - Outed](https://www.codewars.com/kata/57ecf6efc7fe13eb070000e1)

```js
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
```

[Pandemia 🌡️](https://www.codewars.com/kata/5e2596a9ad937f002e510435)

````js
function infected(s) {
  s = s.split('X')

  let totalInf = 0
  let totalPeop = 0
  let emptyArr = []
  for(let i = 0; i < s.length; i++){
    if(s[i].includes('1')){
      emptyArr.push(s[i].replace(/0/g, '1'));
      totalInf += s[i].length
    }else{
      emptyArr.push(s[i])
      totalPeop += s[i].length
    }
  }
  totalPeop += totalInf
  let newStr = emptyArr.join('X')
  ```alPeop * 100
}

infected("01000000X000X011X0X")
infected("01X000X010X011XX")
infected("XXXXX")
````

[Descending Order](https://www.codewars.com/kata/5467e4d82edf8bbf40000155)

```js
function descendingOrder(n) {
	const numberArray = Array.from(String(n), Number);
	return +numberArray.sort((a, b) => b - a).join("");
}
```

[Binary Addition](https://www.codewars.com/kata/551f37452ff852b7bd000139)

```js
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
```

[Unique numbers](https://www.codewars.com/kata/568f9bd9cbe89334c900000c)

```js
function uniqueNumbers(numbersArray) {
	uniqueArray = [];
	numbersArray.map((val) => {
		if (!uniqueArray.includes(val)) {
			uniqueArray.push(val);
		}
	});
	return uniqueArray;
}
```

[Alternate capitalization](https://www.codewars.com/kata/59cfc000aeb2844d16000075)

```js
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
```

[Alternate case](https://www.codewars.com/kata/57a62154cf1fa5b25200031e)

```js
function alternateCase(s) {
	return s
		.split("")
		.map((c) => (c !== c.toLowerCase() ? c.toLowerCase() : c.toUpperCase()))
		.join("");
}
```

[Remove duplicate words](https://www.codewars.com/kata/5b39e3772ae7545f650000fc)

```js
function removeDuplicateWords(s) {
	return [...new Set(s.split(" "))].join(" ");
}
```

[Greet Me](https://www.codewars.com/kata/535474308bb336c9980006f2)

```js
var greet = function (name) {
	const properName = name[0].toUpperCase() + name.slice(1).toLowerCase();
	return `Hello ${properName}!`;
};
```

[Predict your age!](https://www.codewars.com/kata/5aff237c578a14752d0035ae)

```js
function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
	const ages = [age1, age2, age3, age4, age5, age6, age7, age8];
	return Math.floor(Math.sqrt(ages.map((age) => age * age).reduce((acc, val) => acc + val)) / 2);
}
```

[Testing 1-2-3](https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9)

```js
var number = function (array) {
	return array.map((line, index) => `${index + 1}: ${line}`);
};
```

[Form The Minimum](https://www.codewars.com/kata/5ac6932b2f317b96980000ca)

```js
function minValue(values) {
	return +[...new Set(values)].sort((a, b) => a - b).join("");
}
```

[Exes and Ohs](https://www.codewars.com/kata/55908aad6620c066bc00002a)

```js
function XO(str) {
	str = str.toLowerCase().split("");
	const resultCounts = str.reduce(
		(counts, val) => {
			if (val === "x") {
				counts.countX++;
			}
			if (val === "o") {
				counts.countO++;
			}
			return counts;
		},
		{ countX: 0, countO: 0 }
	);
	const { countX, countO } = resultCounts;
	return countX === countO;
}
```

[Complementary DNA](https://www.codewars.com/kata/554e4a2f232cdd87d9000038)

```js
function DNAStrand(dna) {
	return dna
		.split("")
		.map((letter) => {
			if (letter === "A") return "T";
			if (letter === "T") return "A";
			if (letter === "G") return "C";
			if (letter === "C") return "G";
		})
		.join("");
}
```

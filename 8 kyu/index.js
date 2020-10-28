//filter out the geese
function gooseFilter(birds) {
	var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

	const filteredBirds = birds.filter(function (bird) {
		console.log(bird)
		if (!geese.includes(bird)) {
			return bird
		}
	})
	return filteredBirds
}

// Counting sheep...
function countSheeps(arrayOfSheep) {
	const amountOfSheep = arrayOfSheep.filter(function (sheep) {
		if (sheep) {
			return sheep
		}
	})
	return amountOfSheep.length
}

// Hello, Name or World!
function hello(name) {
	if (name === undefined || name.length === 0) {
		name = "World"
	}
	name = name.toLowerCase()
	name = name.charAt(0).toUpperCase() + name.slice(1)
	return "Hello, " + name + "!"
}

// Returning Strings
function greet(name) {
	return `Hello, ${name} how are you doing today?`
}

// Grasshopper - Function syntax debugging
function main(verb, noun) {
	return verb + noun
}

// Grasshopper - Debug sayHello
function sayHello(name) {
	return `Hello, ${name}`
}

// Even or Odd
function even_or_odd(number) {
	let calcNumber = number % 2

	if (calcNumber == 0) {
		return "Even"
	} else {
		return "Odd"
	}
}

// Sum of positive
function positiveSum(arr) {
	let sum = 0

	if (arr.length === 0) {
		return 0
	}

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			sum += arr[i]
		} else {
			continue
		}
	}
	return sum
}

// Basic variable assignment
var a = "code"
var b = "wa.rs"
var name = a + b

// Simple Comparison?
function add(a, b) {
	if (a == b) {
		return true
	} else {
		return false
	}
}

// Area or Perimeter
const areaOrPerimeter = function (l, w) {
	if (l === w) {
		return l * w
	} else {
		return 2 * (l + w)
	}
}

// Total amount of points
function points(games) {
	let sum = 0
	for (let i = 0; i < games.length; i++) {
		let x = parseInt(games[i][0])
		let y = parseInt(games[i][2])

		if (x > y) {
			sum += 3
		}
		if (x < y) {
			sum += 0
		}
		if (x == y) {
			sum += 1
		}
	}
	return sum
}

// Smallest unused ID
function nextId(ids) {
	console.log(ids.length)
	for (let i = 0; i < ids.length; i++) {
		if (ids.indexOf(i) === -1) {
			return i
		}
	}
	return ids.length
}

// Student's Final Grade
function finalGrade(exam, projects) {
	if (exam > 90 || projects > 10) return 100
	if ((exam > 75) & (projects >= 5)) return 90
	if ((exam > 50) & (projects >= 2)) return 75
	return 0
}

// Beginner Series #2 Clock
function past(h, m, s) {
	let hour = 3600000 * h
	let minute = 60000 * m
	let second = 1000 * s
	return hour + minute + second
}

// Find Maximum and Minimum Values of a List
var min = function (list) {
	return Math.min(...list)
}

var max = function (list) {
	return Math.max(...list)
}

// Are You Playing Banjo?
function areYouPlayingBanjo(name) {
	return name.toUpperCase().charAt(0) === "R"
		? name + " plays banjo"
		: name + " does not play banjo"
}

// You only need one - Beginner
function check(a, x) {
	return a.includes(x)
}

// Get Planet Name By ID
function getPlanetName(id) {
	var name
	switch (id) {
		case 1:
			name = "Mercury"
			break
		case 2:
			name = "Venus"
			break
		case 3:
			name = "Earth"
			break
		case 4:
			name = "Mars"
			break
		case 5:
			name = "Jupiter"
			break
		case 6:
			name = "Saturn"
			break
		case 7:
			name = "Uranus"
			break
		case 8:
			name = "Neptune"
			break
	}

	return name
}

// Sum Arrays
function sum(numbers) {
	if (numbers.length === 0) {
		return 0
	}
	return numbers.reduce((acc, val) => {
		return (acc += val)
	}, 0)
}

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

// Valid Parentheses
function validParentheses(parens) {
	let arr = [];
	for (let i = 0; i < parens.length; i += 1) {
		if (parens[i] === ")") {
			if (arr.length <= 0) {
				return false;
			} else {
				arr.shift();
			}
		}
		if (parens[i] === "(") {
			arr.push(")");
		}
	}

	return arr.length ? false : true;
}

// Pete, the baker
function cakes(recipe, available) {
	let currentRecipe = Object.entries(recipe);
	let storage = Object.entries(available);
	let possibleCakes = [];
	let counter = 0;
	for (let i = 0; i < currentRecipe.length; i++) {
		for (let j = 0; j < storage.length; j++) {
			if (storage[j][0].includes(currentRecipe[i][0]) === true) {
				counter += 1;
				let newNumber = Math.floor(storage[j][1] / currentRecipe[i][1]);
				possibleCakes.push(newNumber);
			}
		}
	}
	if (counter < currentRecipe.length) {
		return 0;
	}
	return Math.min(...possibleCakes);
}

// Moving Zeros To The End

var moveZeros = function (arr) {
	const arrWithZeros = [];
	const arrWithoutZeros = [];

	arr.map((number) => {
		if (number === 0) {
			arrWithZeros.push(number);
		} else {
			arrWithoutZeros.push(number);
		}
	});

	return arrWithoutZeros.concat(arrWithZeros);
};

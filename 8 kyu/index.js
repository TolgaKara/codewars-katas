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

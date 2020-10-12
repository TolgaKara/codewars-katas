# 8 Kyu

### [Filter out the geese](https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7)

```javascript
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
```

### [Counting sheep...](https://www.codewars.com/kata/54edbc7200b811e956000556)

```javascript
function countSheeps(arrayOfSheep) {
	const amountOfSheep = arrayOfSheep.filter(function (sheep) {
		if (sheep) {
			return sheep
		}
	})
	return amountOfSheep.length
}
```

### [Hello, Name or World!](https://www.codewars.com/kata/57e3f79c9cb119374600046b)

```javascript
function hello(name) {
	if (name === undefined || name.length === 0) {
		name = "World"
	}
	name = name.toLowerCase()
	name = name.charAt(0).toUpperCase() + name.slice(1)
	return "Hello, " + name + "!"
}
```

### [Returning Strings](https://www.codewars.com/kata/55a70521798b14d4750000a4)

```javascript
function greet(name) {
	return `Hello, ${name} how are you doing today?`
}
```

### [Grasshopper - Function syntax debugging](https://www.codewars.com/kata/56dae9dc54c0acd29d00109a)

```javascript
function main(verb, noun) {
	return verb + noun
}
```

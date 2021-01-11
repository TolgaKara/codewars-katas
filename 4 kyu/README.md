[Sum Strings as Numbers](https://www.codewars.com/kata/5324945e2ece5e1f32000370)

```js
function sumStrings(a, b) {
	if (a.length < b.length) {
		while (a.length != b.length) {
			a = "0" + a;
		}
	} else if (b.length < a.length) {
		while (a.length != b.length) {
			b = "0" + b;
		}
	}

	let sum = "";
	let carry = 0;
	for (let i = a.length - 1; i >= 0; i--) {
		const aNum = +a[i];
		const bNum = +b[i];
		const innerSum = aNum + bNum + carry;

		let placeNumber = innerSum;

		if (innerSum > 9) {
			placeNumber = innerSum % 10;
			carry = Math.floor(innerSum / 10);
		} else {
			carry = "";
		}
		sum = placeNumber + sum;
	}

	sum = carry + sum;

	while (sum[0] == "0") {
		sum = sum.slice(1);
	}
	return sum;
}
```

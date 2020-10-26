// Valid Parentheses
function validParentheses(parens) {
	let arr = []
	for (let i = 0; i < parens.length; i += 1) {
		if (parens[i] === ")") {
			if (arr.length <= 0) {
				return false
			} else {
				arr.shift()
			}
		}
		if (parens[i] === "(") {
			arr.push(")")
		}
	}

	return arr.length ? false : true
}

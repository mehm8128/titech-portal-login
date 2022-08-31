const string = "ここにマトリクスコードを左上から右向きに進んで羅列していく"
/*
  例）
  abcd
  efgh
  ijkl
  ならconst string="abcdefghijkl"
  */

let result = "["
for (let i = 0; i < 10; i++) {
	for (let j = 0; j < 7; j++) {
		if (j !== 6) {
			result += `"${string[i * 7 + j]}",`
		} else {
			if (i !== 9) {
				result += `"${string[i * 7 + j]}"],[`
			} else {
				result += `"${string[i * 7 + j]}"]`
			}
		}
	}
}
console.log(result)

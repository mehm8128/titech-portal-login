const matrixList = []
//この配列にconvert.jsで生成した配列たちを入れる

for (let i = 0; i < 3; i++) {
	const tr = document
		.querySelector("#authentication")
		.getElementsByTagName("tr")
	[i + 4]
	// thがpc, tdがspに対応
	const givenText = tr.getElementsByTagName("th")[0].innerText !== ''
		? tr.getElementsByTagName("th")[0].innerText
		: tr.getElementsByTagName("td")[0].innerText
	document.getElementsByTagName("input")[i + 1].value =
		matrixList[givenText.charCodeAt(1) - 65][Number(givenText[3]) - 1]
}
document.getElementsByTagName("input")[4].click()

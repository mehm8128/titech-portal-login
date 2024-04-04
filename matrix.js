const matrixList = []
//この配列にconvert.jsで生成した配列たちを入れる

for (let i = 0; i < 3; i++) {
	let inputText = document
		.querySelector("#authentication")
		.getElementsByTagName("tr")
		[i + 4].getElementsByTagName("td")[0].innerText
	document.getElementsByTagName("input")[i + 1].value =
		matrixList[inputText.charCodeAt(1) - 65][Number(inputText[3]) - 1]
}
document.getElementsByTagName("input")[4].click()

const plainText = "label";
const key = 13;

function XORStarter(plainText, key){
	// 10進数の配列を作成
	const binary = plainText.split('').map(v => v.charCodeAt(0));
	// [108, 97, 98, 101, 108]
	
	// 各それぞれの要素をkeyとXOR
	const xored = binary.map(v => v ^ key);
	
	// 文字列としてつなげて表示
	return xored.map(v => String.fromCharCode(v)).join("");
}

console.log(XORStarter(plainText, key));



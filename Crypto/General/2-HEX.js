const hex = "63727970746f7b596f755f77696c6c5f62655f776f726b696e675f776974685f6865785f737472696e67735f615f6c6f747d";

// 正規表現: 
//      / ... / : 範囲指定
//      . : 任意の1文字以上
//      g : 最初の1文字だけでなく全て対象

function HEX(hex){
	// 2個ずつ区切ってそれぞれを10進数にし、ASCIIに直す
	const afterHex = hex.match(/.{1,2}/g).map(v => String.fromCharCode(parseInt(v, 16)));
	return afterHex.join("");
}

module.exports = { HEX };

console.log(HEX(hex));

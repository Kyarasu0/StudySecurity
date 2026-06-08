const ascii_list =[99, 114, 121, 112, 116, 111, 123, 65, 83, 67, 73, 73, 95, 112, 114, 49, 110, 116, 52, 98, 108, 51, 125];

// UTF-8: 最小単位が8bit(1byte)の可変長文字/バイト列変換方式
// UTF-16: 最小単位が16bit(2byte)の基本的には固定長文字/バイト列変換方式

function ASCII(ascii_list){
	const result = ascii_list.map(v => String.fromCharCode(v));
	return result.join("");
}

module.exports = { ASCII };

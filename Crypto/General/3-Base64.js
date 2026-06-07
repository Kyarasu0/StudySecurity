const hex = "72bca9b68fc16ac7beeb8f849dca1d8a783e8acf9679bf9269f7bf";
// base64テーブルから文字を取得
const base64Table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

function Base64_Encoder(hex){
	// 10進数配列
	const afterHex = hex.match(/.{1,2}/g).map(v => parseInt(v, 16));

	// 2進数の文字列配列
	// toString(2)とすることで2進数にできる
	// padStartで8文字にできる(足りない部分は0で補完)
	const bytes = afterHex.map(v => v.toString(2).padStart(8, "0")).join("");

	// 6bitごとに分割
	const base64 = bytes.match(/.{1,6}/g)
	// 6bitに足りていない要素には0で埋め、"="で知らせる
	let padLength = 0; 
	if (base64[base64.length - 1].length !== 6){
		padLength = (6 - base64[base64.length - 1].length) / 2
		base64[base64.length - 1] = base64[base64.length - 1].padEnd(6, "0");
	}

	// 6bitを10進数に変換してテーブルから取得
	let result = base64.map(v => base64Table[parseInt(v, 2)]).join("");

	// パディング処理
	result = result + "=".repeat(padLength);

	return result;
}

function Base64_Decoder(data){
	const nonPadData = data.replace(/=/g, "").split("");
	// 文字列を10進数に変換
	const normalInt = nonPadData.map(v => base64Table.indexOf(v));
	// 10進数を6bitに変換
	const base64 = normalInt.map(v => v.toString(2).padStart(6, "0")).join("");
	// 8bitに変換して各それぞれを10進数に変換
	// 8bitに満たないところはエンコード時にpaddingされたところなので捨てる
	const bytes = base64.match(/.{1,8}/g).filter(v => v.length === 8).map(v => parseInt(v, 2));
	// ASCIIに変換
	const result = bytes.map(v => String.fromCharCode(v)).join("");
	return result;
}

module.exports = { Base64_Encoder, Base64_Decoder };

console.log(Base64_Encoder(hex));

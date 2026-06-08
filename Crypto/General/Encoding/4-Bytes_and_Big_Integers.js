const bigInt = BigInt("11515195063862318899931685488813747395775516287289682636499965282714637259206269");

function BigInt_Decoder(bigInt){
	// 16進数に変換
	const hex = bigInt.toString(16);

	// 10進数配列に変換
	const normalInt = hex.match(/.{1,2}/g).map(v => parseInt(v, 16));

	// 各10進数をASCIIに変換
	const result = normalInt.map(v => String.fromCharCode(v));

	return result.join("");
}

function BigHex_Decoder(bigHex){
	const normalInt = bigHex.match(/.{1,2}/g).filter(v => v !== "0x").map(v => parseInt(v, 16));
	const result = normalInt.map(v => String.fromCharCode(v));
	return result.join("");
}

module.exports = { BigInt_Decoder, BigHex_Decoder };

// 結果を表示
console.log(BigInt_Decoder(bigInt));
console.log(BigHex_Decoder("0x726f756e64735f6861745f617661696c61626c65"));

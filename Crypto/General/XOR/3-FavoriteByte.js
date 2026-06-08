const chiperText = "73626960647f6b206821204f21254f7d694f7624662065622127234f726927756d";

// 10進数配列の作成
const binary = chiperText.match(/.{1,2}/g).map(v => parseInt(v, 16));

let result = [];
for (let i = 0; i <= 255; i++){
	result = binary.map(v => String.fromCharCode(v ^ i));
	if (result.join("").includes("crypto")){
		console.log(result.join(""));
		break;
	}
}

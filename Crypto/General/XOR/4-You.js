const hex = "0e0b213f26041e480b26217f27342e175d0e070a3c5b103e2526217f27342e175d0e077e263451150104";
const hint = "crypto{";

// 10進数配列の作成
const binary = hex.match(/.{1,2}/g).map(v => parseInt(v, 16));
const hintBinary = hint.split("").map(v => v.charCodeAt(0));

let keyHint = [];
for (let i = 0; i < hintBinary.length; i++){
	keyHint.push(String.fromCharCode(binary[i] ^ hintBinary[i]));
}
console.log(keyHint.join(""));

// ここで出力がmyXORkeだったので暗号鍵がmyXORkeyだと予想して復号を試みる


const keyCandidate = "myXORkey";
const keyCandidateBinary = keyCandidate.split("").map(v => v.charCodeAt(0));

let result = [];
for (let i = 0; i < binary.length; i++){
	result.push(String.fromCharCode(binary[i] ^ keyCandidateBinary[i % keyCandidateBinary.length]));
}

console.log(result.join(""));


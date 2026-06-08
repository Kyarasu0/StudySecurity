const KEY1 = "a6c8b6733c9b22de7bc0253266a3867df55acde8635e19c73313";
const KEY1_KEY2 = "37dcb292030faa90d07eec17e3b1c6d8daf94c35d4c9191a5e1e";
const KEY2_KEY3 = "c1545756687e7573db23aa1c3452a098b71a7fbf0fddddde5fc1";
const FLAG_KEY1_KEY2_KEY3 = "04ee9855208a2cd59091d04767ae47963170d1660df7f56f5faf";

const KEY1List = KEY1.match(/.{1,2}/g).map(v => parseInt(v, 16));
const KEY2_KEY3List = KEY2_KEY3.match(/.{1,2}/g).map(v => parseInt(v, 16));
const FlagList = FLAG_KEY1_KEY2_KEY3.match(/.{1,2}/g).map(v => parseInt(v, 16));

let result = [];
for (let i = 0; i < FlagList.length; i++){
	result.push(String.fromCharCode(FlagList[i] ^ KEY1List[i] ^ KEY2_KEY3List[i]));	
}

console.log(result.join(""));


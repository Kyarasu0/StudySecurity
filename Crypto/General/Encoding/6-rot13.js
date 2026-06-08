function rot13(data){
	let result = [];
	for (const v of data){
		const vCharCode = v.charCodeAt(0);
		if ("a".charCodeAt(0) <= vCharCode && vCharCode <= "z".charCodeAt(0)){
			result.push(String.fromCharCode(((vCharCode - "a".charCodeAt(0)) + 13) % 26 + "a".charCodeAt(0)));
		} else if ("A".charCodeAt(0) <= vCharCode && vCharCode <= "Z".charCodeAt(0)){
			result.push(String.fromCharCode(((vCharCode - "A".charCodeAt(0)) + 13) % 26 + "A".charCodeAt(0)));
		} else {
			result.push(v);
		}
	}
	return result.join("");
}

module.exports = { rot13 };

console.log(rot13("Hello, World!"));

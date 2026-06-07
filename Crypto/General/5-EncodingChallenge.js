const net = require('net');
const { ASCII } = require('./1-ASCII.js');
const { HEX } = require('./2-HEX.js');
const { Base64_Decoder } = require('./3-Base64.js');
const { BigHex_Decoder } = require('./4-Bytes_and_Big_Integers.js');
const { rot13 } = require('./6-rot13.js');

const client = net.createConnection(13377, "socket.cryptohack.org");

// データを受信したときに発火
client.on("data", data => {
	console.log(data.toString());
  	const obj = JSON.parse(data.toString());

  	let decoded;

  	switch (obj.type) {
    		case "base64":
      			decoded = Base64_Decoder(obj.encoded);
      			break;

    		case "hex":
      			decoded = HEX(obj.encoded);
      			break;

    		case "rot13":
      			decoded = rot13(obj.encoded);
      			break;

    		case "bigint":
			decoded = BigHex_Decoder(obj.encoded);
      			break;

    		case "utf-8":
      			decoded = ASCII(obj.encoded);
      			break;
  	}

	console.log(decoded);
  	client.write(JSON.stringify({ decoded }) + "\n");
});

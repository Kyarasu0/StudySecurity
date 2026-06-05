const net = require('net');
const { ASCII } = require('./1-ASCII.js');
const { HEX } = require('./2-HEX.js');
const { Base64Decoder } = require('./3-Base64.js');
const { BigHex_Dencoder } = require('./4-Bytes_and_Big_Integers.js');

const client = net.createConnection(13377, "socket.cryptohack.org");

client.on("data", data => {
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
      decoded = obj.encoded.replace(/[a-zA-Z]/g, c =>
        String.fromCharCode(
          c.charCodeAt(0) + (c.toLowerCase() < "n" ? 13 : -13)
        )
      );
      break;

    case "bigint":
      break;

    case "utf-8":
      decoded = obj.encoded.map(v => String.fromCharCode(v)).join("");
      break;
  }

  client.write(JSON.stringify({ decoded }) + "\n");
});

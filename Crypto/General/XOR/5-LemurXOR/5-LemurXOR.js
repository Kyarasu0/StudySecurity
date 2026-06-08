// File Systemのインポート
const fs = require('fs');
// PNGを扱うpngjsのインポート
const { PNG } = require('pngjs');

// 読み込んだ内容をPNGとして解釈
// {
// 	width: 640,
// 	height: 480,
//	data: [R,G,B,A,R,G,B,A,...]
// }
const img1 = PNG.sync.read(fs.readFileSync('flag.png'));
const img2 = PNG.sync.read(fs.readFileSync('lemur.png'));

// 結果としてのPNGを作成
const result = new PNG({ width: img1.width, height: img2.height });

// data = [R, G, B, A, R, G, B, A, ...]
for (let i = 0; i < img1.data.length; i += 4){
	result.data[i] = img1.data[i] ^ img2.data[i];	
	result.data[i + 1] = img1.data[i + 1] ^ img2.data[i + 1];	
	result.data[i + 2] = img1.data[i + 2] ^ img2.data[i + 2];	
	result.data[i + 3] = 255;	
}

fs.writeFileSync('output.png', PNG.sync.write(result));
console.log("Done!");

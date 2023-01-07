const fs = require('fs');

const readStream = fs.createReadStream('file_system_test.txt', 'utf8');
const writeStream = fs.createWriteStream('file_system_test1.txt');

// readStream.on('data', (chunk)=>{
//     writeStream.write(chunk);
// });

readStream.pipe(writeStream);
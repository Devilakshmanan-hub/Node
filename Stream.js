
//Readable Stream

// const D = require('fs');
// var ReadStream = D.createReadStream(__dirname+'/file.txt','utf8');
// ReadStream.on('data',function(chunk){
//     console.log('New Data Reveived');
//     console.log(chunk);
// })

//Writable Stream

// const N = require('fs');
// var writeStream = N.createWriteStream(__dirname+'/file.txt','utf8');
// for(let i=0;i<1000;i++){
//     writeStream.write(`Line number ${i+1}: Dummy data for testing streams.\n`);
// }
// writeStream.end(()=>{
//     console.log("Dummy file created!");
// });

// Writable-append with existing file

// const N = require('fs');
// var writeStream = N.createWriteStream(__dirname+'/Sample.txt',{flags:'a'});
// for(let i=0;i<1000;i++){
//     writeStream.write(`Appending ${i+1}: Dummy data for testing streams.\n`);
// }
// writeStream.end(()=>{
//     console.log("Append file created!");
// });

//Readable Stream


const fs = require('fs');

// Create a readable stream from a file
const readableStream = fs.createReadStream('pipe.txt', {
  encoding: 'utf8',
  highWaterMark: 64 * 1024 // 64KB chunks
});

// Events for readable streams
readableStream.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data.`);
  console.log(chunk);
});

readableStream.on('end', () => {
  console.log('No more data to read.');
});

readableStream.on('error', (err) => {
  console.error('Error reading from stream:', err);
});

//Writable stream


const D = require('fs');

// Create a writable stream to a file
const writableStream = D.createWriteStream('output.txt');

// Write data to the stream
writableStream.write('Hello, ');
writableStream.write('World!');
writableStream.write('\nWriting to a stream is easy!');

// End the stream
writableStream.end();

// Events for writable streams
writableStream.on('finish', () => {
  console.log('All data has been written to the file.');
});

writableStream.on('error', (err) => {
  console.error('Error writing to stream:', err);
});


const L = require('fs');
const zlib = require('zlib');

// Create a pipeline to read a file, compress it, and write to a new file
L.createReadStream('pipe.txt')
  .pipe(zlib.createGzip()) // Compress the data
  .pipe(L.createWriteStream('destination.txt.gz'))
  .on('finish', () => {
    console.log('File compressed successfully!');
  });

/**
 * HOW TO RUN
 * `node script/generateIcon.js`
 * ensure after script run properly the file icons.json should be written in src/constants/icons.json
 */
const path = require('path');
const fs = require('fs');

const directoryPath = path.join(__dirname, '../src/assets/icons');
const directoryTarget = './src/constants/icons.json';

fs.readdir(directoryPath, function (err, files) {
  if (err) return console.log('Unable to scan directory: ' + err);

  fs.writeFile(directoryTarget, JSON.stringify(files), (err) => {
    if (err) return console.log(err);
    console.log('Successfully written constants icons');
  });
});

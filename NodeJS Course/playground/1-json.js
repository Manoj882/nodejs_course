const fs = require('fs');

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);

user.name = 'Manoj';
user.age = '24';

const userJSON = JSON.stringify(user);
// fs.writeFileSync('1-json.json', userJSON);
const newDataBuffer = fs.readFileSync('1-json.json');
const newDataJSON = newDataBuffer.toString();
const newData = JSON.parse(newDataJSON);
console.log(newData);




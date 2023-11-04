import testjson from './testjson.js';

const zeroLanguage = JSON.stringify(testjson,undefined,4);
console.log(zeroLanguage);
console.log(testjson[0].name);
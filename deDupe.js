const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
var pattern = {};
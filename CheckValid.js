const flattenedArray = arr => [].concat(...arr);
const shuffledArray = array.sort(() => Math.random() - 0.5); 
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
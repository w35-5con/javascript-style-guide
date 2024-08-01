const isEmptyArray = arr => !arr.length;
const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const lastElement = arr => arr[arr.length - 1];
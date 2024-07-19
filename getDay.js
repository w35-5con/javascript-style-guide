const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
const intermediateAppPath = path.join(buildOutputPath, 'app');
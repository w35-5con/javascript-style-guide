const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;
console.log("0 || 1 = "+(0 || 1));
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const repositoryRootPath = path.resolve(__dirname, '..');
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
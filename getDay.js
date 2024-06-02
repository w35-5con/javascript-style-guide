const stringReverse = str => str.split("").reverse().join("");
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
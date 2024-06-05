const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const isEmptyArray = arr => !arr.length;
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
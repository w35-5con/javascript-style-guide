const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
const resultingPromises = urls.map((url) => makHttpRequest(url));
const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
const isEmptyObject = obj => Object.keys(obj).length === 0;
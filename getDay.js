const randomString = () => Math.random().toString(36).slice(2);
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
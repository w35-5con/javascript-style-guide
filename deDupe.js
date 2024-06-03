const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
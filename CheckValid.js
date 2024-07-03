const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
const getRandomBoolean = () => Math.random() >= 0.5;
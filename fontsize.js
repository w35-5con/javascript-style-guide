const flattenedArray = arr => [].concat(...arr);
const isWeekday = (date) => date.getDay() % 6 !== 0;
const maxNumber = arr => Math.max(...arr);
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
var arr2 = arr1.reverse();
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
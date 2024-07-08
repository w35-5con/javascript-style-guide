const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
const isWeekday = (date) => date.getDay() % 6 !== 0;
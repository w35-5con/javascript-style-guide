console.log(+"1" +  "1" + "2");
const uniqueArray = arr => [...new Set(arr)];
const timeFromDate = date => date.toTimeString().slice(0, 8);
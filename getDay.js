const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
console.log(false == '0');
console.log(1 +  "2" + "2");
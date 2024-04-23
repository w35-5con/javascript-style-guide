const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const repositoryRootPath = path.resolve(__dirname, '..');
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const appName = getAppName(channel);
console.log(1 +  "2" + "2");
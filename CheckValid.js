var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
const timeFromDate = date => date.toTimeString().slice(0, 8);
const arrayContains = (arr, element) => arr.includes(element);
const resultingPromises = urls.map((url) => makHttpRequest(url));
const result = await makeHttpRequest(url);
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
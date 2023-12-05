"use strict"
function solveEquation(a, b, c) {  
  let arr = [];  
  let d = b ** 2 - 4 * a * c;  

  d < 0 ? arr = [] : d === 0 ? arr.push(-b / (2 * a)) : d > 0 ? (arr.push((-b + Math.sqrt(d)) / (2 * a)), arr.push((-b - Math.sqrt(d)) / (2 * a))) : null;  

  return arr;  
}  
  solveEquation(1, 2, 3);
  
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = percent/100/12;
  let creditBody = amount - contribution;
  let payment = creditBody * (percent + (percent / ((Math.pow((1 + percent), countMonths)) - 1)));
  let totalAmount = payment * countMonths;
  return parseFloat(totalAmount.toFixed(2));
}
let result = Number(calculateTotalMortgage(10, 0, 50000, 12));
console.log(result);

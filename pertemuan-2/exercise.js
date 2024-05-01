console.log('Exercise day 2 / 2nd meet');

/**
 * (1) Write a code to convert celsius to fahrenheit
 * Example: 60 Celcius → 140 Fahrenheit
 */
console.log('(1) Write a code to convert celsius to fahrenheit\nExample: 60 Celcius → 140 Fahrenheit');
const temperatureConversion = (celcius) => (celcius*(9/5) + 32)
console.log(`result if 60 Celcius : ${temperatureConversion(60)}`);
console.log('\n');

/**
 * (2) Write a code to check whether the number is odd or even
 * Example: 25 → odd number, 2 → even number
 */
console.log('(2) Write a code to check whether the number is odd or even\nExample: 25 → odd number, 2 → even number');
const oddOrEvenNumber = (n) => n%2===0? 'even number':'odd number';
console.log(`result if number is 25 : ${oddOrEvenNumber(25)}`);
console.log(`result if number is 2 : ${oddOrEvenNumber(2)}`);
console.log('\n');

/**
 * (3) Write a code to check whether the number is prime number or not
 * Example: 7 → 7 is a prime number
 * Example: 6 → 6 is not a prime number
 */
console.log('(3) Write a code to check whether the number is prime number or not\nExample: 7 → 7 is a prime number\nExample: 6 → 6 is not a prime number');
const isPrimeNumber = (n) => {
  for (let i = 2; i < n; i++) {
    if (n%i===0||n===0||n===1) {
      return 'not a prime number'
    } else {
      return 'prime number'
    }
  }
}
console.log(`result if number is 7 : ${isPrimeNumber(7)}`);
console.log(`result if number is 6 : ${isPrimeNumber(6)}`);
console.log('\n');

/**
 * (4) Write a code to find the sum of the numbers 1 to N
 * Example:5 →1+2+3+4+5=15
 * Example:3→1+2+3=6
 */
console.log('(4) Write a code to find the sum of the numbers 1 to N\nExample:5 →1+2+3+4+5=15\nExample:3→1+2+3=6');
const sumOfNumbers = (n)=>{
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum+=i
  }
  return sum;
}
console.log(`result if number is 5 : ${sumOfNumbers(5)}`);
console.log(`result if number is 3 : ${sumOfNumbers(3)}`);
console.log('\n');

/**
 * (5) Write a code to find factorial of a number
 * Example:4!→4×3x2×1=24
 * Example:6!→6×5x4x3x2x1=720
 */
console.log('(5) Write a code to find factorial of a number\nExample:4!→4x3x2x1=24\nExample:6!→6×5x4x3x2x1=720');
const factorial = (n)=>{
  let result = 1;
  for(let i = n; i>0; i--){
    result*=i
  }
  return result
}
console.log(`result if number is 4 : ${factorial(4)}`);
console.log(`result if number is 6 : ${factorial(6)}`);
console.log('\n');

/**
 * (6) Write a code to print the first N fibonacci numbers
 * Example: 15 →610
 */
console.log('(6) Write a code to print the first N fibonacci numbers\nExample: 15 →610');
const fibonacci = (n)=>{
  let result = 1;
  let nMin1 = 1;
  let nMin2 = 1;
  let nCurr = 2;
  let temp = 2;
  if (n<=2) {
    switch (n) {
      case 0:
        result = 0
        break
      case 1:
        result = 1
        break
      case 2:
        result = 1
        break
    }
  } else{
    for ( let i=0; i<=n; i++){
      if (i<3) {
        continue
      }
      temp = nCurr
      nCurr = nMin1+nMin2
      // console.log(`before swap i = ${i}, temp = ${temp}, nCurr = ${nCurr}, nMin1 = ${nMin1}, nMin2 = ${nMin2}`);
      nMin2 = nMin1
      temp = nCurr
      nMin1 = temp
      // console.log(`after swap i = ${i}, temp = ${temp}, nCurr = ${nCurr}, nMin1 = ${nMin1}, nMin2 = ${nMin2}\n`);
    }
    result = nCurr
    return result
  }
}
console.log(`result if number is 15 : ${fibonacci(15)}`);
console.log('\n');
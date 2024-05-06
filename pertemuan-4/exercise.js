// const Calculate = (num1, ops, num2) => {
//   switch (ops) {
//     case "+":
//       return num1 + num2;
//     case "-":
//       return num1 - num2;
//     case ":":
//       return num1 / num2;
//     case "*":
//       return num1 / num2;
//     default:
//       return "There is a problem";
//   }
// };

// console.log(Calculate(1, "l", 2));
// console.log(Calculate(1, "+", 2));

console.log("\n=================");
console.log("Exercise from PPT");
console.log("=================\n");

/**
 * Exercise from PPT
 *
 * Exercise 1
 * Create a function that can create a triangle pattern according to the height we provide like the
 * following :
 * 01
 * 02 03
 * 04 05 06
 * 07 08 09 10
 * Parameters : height → triangle height
 */
// console.log('\n');

console.log("Exercise 1");
const trianglePattern = (n) => {
  let j = 1;
  let i = 1;
  let result = "";
  while (j <= n) {
    for (let k = 1; k <= i; k++) {
      let temp = "0" + j + " ";
      result += temp;
      if (k + 1 > i) {
        result += "\n";
      }
      j++;
    }
    i++;
  }
  return result;
};

console.log(trianglePattern(10));
// console.log('\n');

// Exercise 2
// Create a function that can loop the number of times according to the input we provide, and will
// replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with
// "FizzBuzz".
// Parameters : n → total looping
// Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
// Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz

console.log("Exercise 2");
const fizzBuzz3and5 = (n) => {
  let result = "";
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result += "Fizz Buzz";
    }
    else if (i % 3 === 0) {
      result += "Fizz";
    } else if (i % 5 === 0) {
      result += "Buzz";
    } else {
      result += `${i}`;
    }

    if (i + 1 > n) {
      result += "";
    } else {
      result += ", ";
    }
  }
  return result;
};

console.log(fizzBuzz3and5(6));
console.log(fizzBuzz3and5(15));
console.log('\n');

// Exercise 3
// ● Create a function to calculate Body Mass Index (BMI)
// ● Formula : BMI = weight (kg) / (height (meter))²
// ● Parameters : weight & height
// ● Return values :
//  ○ < 18.5 return “less weight”
//  ○ 18.5 - 24.9 return “ideal”
//  ○ 25.0 - 29.9 return “overweight”
//  ○ 30.0 - 39.9 return “very overweight”
//  ○ > 39.9 return “obesity”

console.log("Exercise 3");

const BMICalculator = (weight, height) => {
  let bmi = weight / Math.pow(height, 2);
  // console.log(bmi);
  if (bmi < 18.5) {
    return "less weight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "ideal";
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    return "overweight";
  } else if (bmi >= 30.0 && bmi <= 39.9) {
    return "very overweight";
  } else if (bmi > 39.9) {
    return "obesity";
  }
  return "unknown";
};
console.log(BMICalculator(98, 1.8));

// Exercise 4
// Write a function to remove all odd numbers in an array and return a new array that contains even 
// numbers only
// ○ Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]
console.log('\n');
console.log('Exercise 4');
const removeOddNumberFromArray = (n)=>{
  let arrayExample = []
  for(let i=1; i<=n; i++){
    arrayExample.push(i)
  }
  let arrayWithoutOdd = arrayExample.filter((n)=>n%2===0)
  var result = ''
  arrayWithoutOdd.forEach((e,i) => {
    if (i+1===arrayWithoutOdd.length) {
      result+= e
    } else {
      result+= e+','
    }
  });
  return result
}
console.log(removeOddNumberFromArray(10));
console.log('\n');

// Exercise 5
// Write a function to split a string and convert it into an array of words
// ○ Example : “Hello World” → [“Hello”, “World”]
console.log('Exercise 5');
const splitString = (theString) =>{
  let splitedString = []
  splitedString = theString.split(' ')
  for(let i =0; i<splitedString.length; i++){
    console.log(`word ${i+1} = ${splitedString[i]}`);
  }
}
splitString('Hello world')
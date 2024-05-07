const rectanglePattern = (width, length) => {
  let result = "";
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < length; j++) {
      result += "* ";
    }
    result += "\n";
  }
  return result;
};
console.log(rectanglePattern(3, 4));

const upSideDownTriangle = (n) => {
  let result = "";
  for (let i = n; i > 0; i--) {
    for (let j = i; j > 0; j--) {
      result += "* ";
    }
    result += "\n";
  }
  return result;
};
console.log(upSideDownTriangle(5));

console.log("\n=================");
console.log("Exercise 5 from PPT Part 1");
console.log("=================\n");

// 1. Write a function to get the lowest, highest and average value in the array (with and without sort function).
//  a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}
console.log("No. 1");
const highestLowestAvarageNumberInArray = (array = []) => {
  let lowest = array[0];
  let highest = array[0];
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    let tempForLowest = lowest;
    let tempForHighest = highest;
    lowest = array[i];
    highest = array[i];
    if (lowest > tempForLowest) {
      lowest = tempForLowest;
    }
    if (highest < tempForHighest) {
      highest = tempForHighest;
    }
    sum += array[i];
  }
  let average = sum / array.length;

  let result = { lowest: lowest, highest: highest, average: average };
  return result;
};
console.log(highestLowestAvarageNumberInArray([12, 5, 23, 18, 4, 45, 32]));
console.log("");

// 2. Write a function that takes an array of words and returns a string by concatenating the words in the array,
// separated by commas and - the last word - by an 'and'.
//  a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”
console.log("No. 2");
const arrayOfWordsConcat = (array = []) => {
  let result = "";
  array.forEach((e, i) => {
    if (i + 1 < array.length) {
      result += e + ", ";
    } else {
      result += "and " + e;
    }
  });
  return result;
};
console.log(arrayOfWordsConcat(["apple", "banana", "cherry", "date"]));
console.log("");

// 3. Write a function to split a string and convert it into an array of words
//  a. Example : “Hello World” → [“Hello”, “World”]
console.log("No. 3");
const splitString = (theString = "") => {
  let splitedString = [];
  let temp = "";
  // console.log(theString.length);
  for (let i = 0; i < theString.length; i++) {
    if (theString[i] !== " ") {
      temp += theString[i];
      if (i + 1 === theString.length) {
        splitedString.push(temp);
        temp = "";
      }
    } else {
      // console.log(temp);
      splitedString.push(temp);
      temp = "";
    }
  }
  return splitedString;
};
console.log(splitString("Hello World America Ya Halo"));
console.log("");
// 4. Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are
// of the same length.
//  a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
console.log("No. 4");
const sumOfArray = (array1 = [], array2 = []) => {
  if (array1.length !== array1.length) {
    return "Array length not the same";
  }
  var result = [];
  array1.forEach((e, i) => {
    result[i] = e + array2[i];
  });
  return result;
};

console.log(sumOfArray([1, 2, 3], [3, 2, 1]));
console.log("");
// 5. Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array.
//  a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
//  b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]
console.log("No. 5");
const elementAdder = (array = [], newElement) => {
  var flag = false;
  array.forEach((e) => {
    e === newElement ? (flag = true) : flag;
  });

  if (flag === false) {
    array.push(newElement);
  }

  return array;
};
console.log(elementAdder([1, 2, 3, 4], 4));
console.log(elementAdder([1, 2, 3, 4], 7));

console.log("\n=================");
console.log("Exercise 5 from PPT Part 2");
console.log("=================\n");

// 1. Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
// a. Example : numbers = [1, 2, 3, 4, 5, 6] → [2, 4, 6]
console.log("No. 1");
const oddNumberRemover = (array = []) => {
  let evenNumber = [];
  array.forEach((e) => {
    e % 2 === 0 ? evenNumber.push(e) : "";
  });

  return evenNumber;
};
console.log(oddNumberRemover([1, 2, 3, 4, 5, 6]));
console.log("");

// 2. Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The
// array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the
// array can only contain 5 elements).
// a. Example :
//  maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
//  The function will return [5, 10, 24, 3, 6]
console.log("No. 2");
const maxSizeArrayInsert = (maxSize, ...num) => {
  let newArray = [];
  num.forEach((e, i) => {
    if (Number.isInteger(e)) {
      if (i < maxSize) {
        newArray.push(e);
      }
    }
  });
  return newArray;
};
console.log(maxSizeArrayInsert(5, 5, 10, 24, 3, 6, 7, 8));
console.log("");
// 3. Write a function that will combine 2 given array into one array
// a. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]
console.log("No. 3");
const arrayCombinator = (arr1 = [], arr2 = []) => {
  arr1.push(...arr2);
  return arr1;
};

console.log(arrayCombinator([1, 2, 3], [4, 5, 6]));
console.log("");

// 4. Write a function to find duplicate values in an array
// a. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]
console.log("No. 4");
const duplicateFinder = (array = []) => {
  let duplicateNum = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (j !== i) {
        if (!duplicateNum.includes(array[j])) {
          if (array[i] === array[j]) {
            duplicateNum.push(array[j]);
          }
        }
      }
    }
  }
  return duplicateNum;
};
console.log(duplicateFinder([1, 2, 2, 2, 3, 3, 4, 5, 5]));
console.log("");

// 5. Write a function to find the difference in 2 given array
// a. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]

console.log("No. 5");
const findDifference = (arr1 = [], arr2 = []) => {
  let difference = [];
  arr1.forEach((e) => {
    if (!arr2.includes(e) && !difference.includes(e)) {
      difference.push(e);
    }
  });
  arr2.forEach((e) => {
    if (!arr1.includes(e) && !difference.includes(e)) {
      difference.push(e);
    }
  });
  return difference;
};
console.log(findDifference([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

console.log("\n=================");
console.log("Exercise 5 from PPT Part 3");
console.log("=================\n");

// 1. Based on the array below write a function that will return primitive data types only. let
// arr = [1, [], undefined, {}, "string", {}, []];
// a. The function will return [1, undefined, “string”]
console.log("No. 1");
const isPrimitive = (value = []) => {
  let primitive = [];
  value.forEach((e) => {
    if (!(e instanceof Object)) {
      primitive.push(e);
    }
  });
  return primitive;
};
console.log(isPrimitive([1, [], undefined, {}, "string", {}, []]));
console.log("");

// 2. Write a function from a given array of numbers and return the second smallest number
// a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2
console.log("No. 2");
const findSecondSmallest = (arr = []) => {
  var i, j, temp;
  var swapped;
  for (i = 0; i < arr.length ; i++) {
    swapped = false;
    for (j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j+1]
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }

    // IF no two elements were
    // swapped by inner loop, then break
    if (swapped == false) break;
  }
  return arr[1];


  // haram method
  // return arr.sort((a,b)=>a-b)[1]
};
console.log(findSecondSmallest([5, 3, 1, 7, 2, 6]));
console.log('');

// 3. Write a function from a given array of mixed data types and return the sum of all the number
// a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3
console.log('No. 3');
const mixedFindSumOfNumber = (arr=[])=>{
  let result = 0
  arr.forEach(e=>Number.isInteger(e)?result+=e:'')
  return result
}
console.log(mixedFindSumOfNumber(["3", 1, "string", null, false, undefined, 2]));
console.log('');

// 4. Write a function from the below array of number that will return sum of duplicate values. let
// arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
// a. The function will return 40
console.log('No. 4');
const sumOfDuplicateArrayValue = (array = []) => {
  let duplicateNum = [];
  let flag = 0
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (j !== i) {
        if (!duplicateNum.includes(array[j])) {
          if (array[i] === array[j]) {
            duplicateNum.push(array[j]);
          }
        }
      }
    }
  }
  array.forEach(e=>{
    if (e===duplicateNum[0]) {
      flag++
    }
  })
  return duplicateNum[0]*flag;
};
console.log(sumOfDuplicateArrayValue([10, 20, 40, 10, 50, 30, 10, 60, 10]));
console.log('');

// 5. Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick
// between rock, paper, or scissor.
// a. Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'
console.log('No. 5');
const RPSGame = (userChoice='')=>{
  const Choice = ['Rock', 'Paper', 'Scissors']

  // result user win/lose status
  const rule = (theChoice)=>{
   switch (theChoice) {
    case 'Rock':
      return {Paper: 'Lose', Scissors:'Win', Rock: 'Draw'};
    case 'Paper':
      return {Paper: 'Draw', Scissors:'Lose', Rock: 'Win'};
    case 'Scissors':
      return {Paper: 'Win', Scissors:'Draw', Rock: 'Lose'};
    default:
      return {Paper: 'Unknown', Scissors:'Unknown', Rock: 'Unknown'}
   }
  }

  let opponent = Choice[Math.floor(Math.random() * 3)]
  let user = ''
  Choice.forEach(e=>e===userChoice?user=e:'')
  console.log(`User : ${user} | Opponent : ${opponent}, User (win/lose) : `);
  return rule(user)[opponent]
}
console.log(RPSGame('Rock'));
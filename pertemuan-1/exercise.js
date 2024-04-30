console.log("Exercise");
console.log("Since you already know about pseudocode, lets solve this exercise through pseudocode then convert it into a programming code");

function rectangleArea (height, width){
  return height*width
}

function rectanglePerimeter (height, width){
  return height+width
}

function circleCircumference (r){
  return 2*Math.PI*r
}

function circleDiameter (r){
  return 2*r
}

function circleArea (r){
  return Math.PI*r*r
}

function triangleAngleFinder (angle1, angle2){
  return 180 - (angle1+angle2)
}

function dateDifferenceFinder (date1, date2){
  return (Date.parse(date2) - Date.parse(date1) ) / (1000*3600*24)
}

function dayConverter (day){
  var year = Math.floor(day/365)
  var month = Math.floor(day%365/30)
  var theDay = Math.floor(day%365%30)
  return `${year} year, ${month} month, ${theDay} Day`
}
 

console.log("Write a code to find area of rectangle.");
console.log("Example :length = 5,width = 3 -> 15");
console.log("Result : ");
console.log(rectangleArea(5,3));
console.log("\n");

console.log("Write a code to find perimeter of rectangle.");
console.log("Example : length = 5, width = 3");
console.log("Result : ");
console.log(rectanglePerimeter(5,3));
console.log("\n");

console.log("Write a code to find diameter, circumference and area of a circle.");
console.log("Example : radius = 5");
console.log("Output: diameter = 10 circumference = 31.4169, area = 78.639");
console.log("Result : ");
console.log("Circumference if r were 5 : ");
console.log(circleCircumference(5));
console.log("Circle diameter if r were 5 :");
console.log(circleDiameter(5));
console.log("Circle area if r were 5 :");
console.log(circleArea(5));
console.log("\n");

console.log("Write a code to find angles of triangle if two angles are given");
console.log("Example:a=80,b=65 -> 35");
console.log("Result : ");
console.log(triangleAngleFinder(80,65));
console.log("\n");

console.log("Write a code to get difference between dates in days.");
console.log("Example: date1= 2022-01-20, date2=2022-01-22 ->2");
console.log("Result : ");
console.log(dateDifferenceFinder('2022-01-20','2022-01-22'));
console.log("\n");

console.log("Write a code to convert days to years, months and days (Notes: 1 year :365 days, 1 month days)");
console.log("Example : 400 days -> 1 year, 1 month, 5 days");
console.log("Example : 366 days -> 1 year, O month, 1 day");
console.log("Result : ");
console.log(dayConverter(400));
console.log(dayConverter(366));
console.log(dayConverter(399));
console.log("\n");





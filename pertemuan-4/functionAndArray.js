// Type of function

//declarative function 
console.log('--- DECLARATIVE FUNCTION ---')
helloIamDeclarativeFunction()
function helloIamDeclarativeFunction (){
  console.log('Declarative Function benefit that is can use for hoisting (can call function before intialized it) and this type of function the only one that can achive hoisting')
}

//expressive function
console.log('\n--- EXPRESSIVE FUNCTION ---')
const helloIamExpressiveFunction = function (){
  console.log('yep, This function is Expressive :D')
}
helloIamExpressiveFunction()

// Arrow function 
console.log('\n--- ARROW FUNCTION ---')
const helloIamArrowFunction = ()=> {
  console.log('I am newer style :D, but cannot use hoisting :(')
}
helloIamArrowFunction()

const rectanglePattern = (width,length)=>{
  let result = ''
  for (let i=0; i<width; i++){
    for(let j=0; j<length; j++){
      result+='* '
    }
    result+='\n'
  }
  return result
}
console.log(rectanglePattern(3, 4));

const upSideDownTriangle = (n)=>{
  let result = ''
  for( let i=n; i>0; i--){
    for (let j=i; j>0; j--){
      result+='* '
    }
    result+='\n'
  }
  return result
}
console.log(upSideDownTriangle(5));
/* const firstName: String = "Aarushi";
console.log("Hello " + firstName) */

function isLegal(age: number): boolean{
  if(age>=18){
    return true;
  } else{
    return false;
  }
}

console.log(isLegal(24));
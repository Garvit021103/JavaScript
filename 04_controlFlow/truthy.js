const userEmail = "g@garvit.ai"

if(userEmail){
    console.log("Got user EMail")
}else{
    console.log("dont have user email")
}




// falsy values 

// false , 0 , -0 , bigInt, "" , null , undefined , NaN

// truthy values

// "0" , 'false' , " ", [], {} , function(){}


const emptyObj ={}

if(Object.keys(emptyObj).length === 0 ){
    console.log("Object is Empty")
}





// Nullish Coalescing Operator(??): null undefined
// puts in the safety value in cases where null or undefined value is generated 
let val1;
val1 = 5 ?? 10

console.log(val1)


// Terniary Operator
// condition ? true : false

const iceTeaPrice = 100 
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("More than 80")


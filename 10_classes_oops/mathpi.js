const descripter = Object.getOwnPropertyDescriptor(Math , "PI")

console.log(descripter);


const chai = {
    name:"ginger",
    price: 250 ,
    isAvailable : true,

    orderChai : function(){
        console.log("chai nahi bani")
    }
}

// console.log(chai);

console.log(Object.getOwnPropertyDescriptor(chai , "name"));

Object.defineProperty(chai,'name' , {
    // writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai , "name"));

// for(const [ key , value ] of object){
//     console.log(`${key} : ${value}`);
// }
for(const [ key , value ] of Object.entries(chai)){
    if(typeof value !== 'function'){
    console.log(`${key} : ${value}`);
    }
}


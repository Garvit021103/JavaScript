// for of 

const arr = [1,2,3,4,5]

for (const num of arr){
    // console.log(num)
}

const greetings = "Hello World"
for (greet of greetings){
    // console.log(`Each character is ${greet}`)
}


// Maps
// all the unique values are stored in the maps , no duplicate value

const map = new Map()
map.set('In' , "India")
map.set('Us' , "United States")
map.set('Fr' , "France")

// console.log(map)

for (const [key,value] of map) {
    // console.log(key , ':-' , value );
}

const myObj = {
    'game-1' : "NFS" ,
    'game-2' : "Spiderman" , 
    
}

for (const [key,value] of myObj) {
    console.log(key , ':-' , value)
}
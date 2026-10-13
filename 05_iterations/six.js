// const coding = ["java" , "javaScript" , "cpp" , "python" , "ruby"]

// const values = coding.forEach((item)=>{
//     console.log(item)
//     return item
// })
// console.log(values)

// for each doesnt return values ,  returns undefined in cases other than numbers

const myNum = [1,2,3,4,5,6,7,8,9,10]

// const newNum = myNum.filter((num)=> num>4 )  // returns numbers  but not right now because no console printed 
// we did not use parenthesis because if we do that we have to explicitly use return making code less readable
// const newNum = myNum.filter((num)=> {
//     return num>4} )
// console.log(newNum)


//Another way 
const newNum = [] 

myNum.forEach((num) =>{
    if(num>5){
        newNum.push(num)
    }
}
)
console.log(newNum)
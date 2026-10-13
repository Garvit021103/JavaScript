// with the help of a constructor ( creating a singleton object)

// const tinderUser = new Object() // singleton object
const tinderUser ={}
tinderUser.id = "123abc"
tinderUser.name = "Garvit"
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullName:{
        userfullname:{
            firstName: "Garvit",
            lastName: "Mittal"
        }
    }
}

console.log(regularUser.fullName.userfullname.firstName)

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"a" , 4:"b"}
const obj4 = {5:"a" , 6:"b"}

// const obj3 = {obj1 , obj2}
const obj3 = Object.assign({} ,obj1 , obj2 , obj4) // {} -> target object 
console.log(obj3)

console.log(tinderUser)

console.log(Object.keys(tinderUser)) // important , returns all the keys in a array data type
console.log(Object.values(tinderUser)) 
console.log(Object.entries(tinderUser)) 

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogegdn'));



const course = {
    coursename : "JS in Hindi",
    price : 999,
    courseIntructor : "hitesh",

}

// course.courseIntructor
const {courseIntructor : instructor} = course  // -> destructuring
console.log(instructor)

// {
//     "name": "Hitesh",
//     "coursename": "Js in Hindi",
//     "price": "free"
// }

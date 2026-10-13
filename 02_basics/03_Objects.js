// singleton 
// object literals ( object ko declare karne ka tareeka) 
// no singleton object is formed from literlars
//  singleton object is formed only from constructors method of creating objects

const mySym = Symbol("key1")

const JsUser = {
    name: "Garvit",
    "full name": "Garvit Mittal",
    age : 22,
    [mySym] : "myKey1",
    location : "Gurgaon",
    email: "garvit021103@gmail.com",
    isLoggedIN : false,
    lastLoginDays: ["Monday" , "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"])
console.log(JsUser["name"])
console.log(JsUser["full name"])
console.log(JsUser.mySym) // type undefined - no definition of the symbol because the syntax was incorrect
console.log(JsUser[mySym]) // type changes because earlier it was refering to the initial symbol declared now it comes as string

JsUser.email = "garvit@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@miclosoft.com"
// console.log(JsUser)

// to refer to symbol key you have to use square brackets otherwise compiler will treat it as a string

JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User , ${this.name} `);
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())
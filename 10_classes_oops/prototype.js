// let myName = "garvit     "
// let mychannel = "chai     "
// console.log(myName.trueLength);

let myHeroes = ["thor","spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling" , 

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.garvit = function(){
    console.log(`garvit is present in all objects `);
}

Array.prototype.heyGarvit = function(){
    console.log(`Garvit says Hello`);
    
}

// heroPower.garvit()

myHeroes.garvit()
myHeroes.heyGarvit()
// heroPower.heyGarvit()

// inheritance 

const User = {
    name:'chai' ,
    email:'chai@google.com'
}
const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment : 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//modern syntax 
Object.setPrototypeOf(TeachingSupport , Teacher)

let anotherUsername = "chaiaurcode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is ${this.trim().length}`);
}

anotherUsername.trueLength()
"garvit".trueLength()
"iceTea".trueLength()
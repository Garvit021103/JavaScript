const name = "garvit"
const repoCount = 50

console.log(name + repoCount + "value"); // not recommended

console.log(`Hello my name is ${name} and my repo couny is ${repoCount}`);

// another way to declare a string 
const gameName = new String('GarvitMittal-GM')

console.log(gameName[0]);
console.log(gameName.__proto__)

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.toLowerCase());

console.log("**********************************************8")
const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-3)
console.log(anotherString);

const mewStringOne = "    garvit     "
console.log(mewStringOne)
console.log(mewStringOne.trim())

const url ="https://garvit.com/garvit%20mittal"

console.log(url)
console.log(url.replace('%20','-'));

console.log(gameName.split('t'))




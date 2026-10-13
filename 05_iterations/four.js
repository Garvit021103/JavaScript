const myOBject = {
    js : "Javascript" ,
    cpp : "c++" ,
    rb : "ruby" ,
    swift : "Swift by Apple "
}

for (const key in myOBject) {
    // console.log(key)   
}
// syntax 

for (const key in myOBject){
    // console.log(`${key} is the shortcut for ${myOBject[key]}`)
}

const programming = ["js" , "cpp" , "python","java" , "ruby on rail"]

for (const key in programming) {
    console.log(programming[key])    
}

// if you will write only key , indices of the array will be printed and if you will write programming[key]
// the values will be printed
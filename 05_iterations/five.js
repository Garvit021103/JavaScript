const coding = ["java" , "cpp" , "js" , "py" , "ruby"]
// callback functions have no name
coding.forEach(function (item) {
    console.log(item)
})
// another way to declare the function because callback function have no names
coding.forEach((item)=>{
    console.log(item)
})

function printMe(item){
    console.log(item);
}
coding.forEach(printMe)

coding.forEach((item , index , arr) => {
    console.log(item , index , arr)
})

const myCoding = [
    {
        languageName: "JavaScript",
        languageFile: "js"
    },
    {
        languageName: "C++",
        languageFile: "cpp"
    },
    {
        languageName: "Python",
        languageFile: "Py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName)
})
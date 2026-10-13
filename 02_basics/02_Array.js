const marvel_heros = ["thor" , "IronMan" , "SpiderMan"]
const dc_heros = ["superMan" , "flash" , "batMan"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros)

const all_new_heros = [...marvel_heros, ...dc_heros] // makes all the elements individual
console.log(all_new_heros)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)


console.log(Array.isArray("Garvit"))
console.log(Array.from("Garvit"))
console.log(Array.from({name: "Garvit"})) // Interesting topic from interview standpoint return expty because array is not made due to name written here

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 , score2 , score3))

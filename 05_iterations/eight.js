// reduce

const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc,curval) {
//     console.log(`accumulator: ${acc} , current Value: ${curval}`);
//     return acc+curval},0)
// accumulator fetches the value written after declaration of the function , separated

// const myTotal = myNums.reduce((acc,curval)=> acc+curval,0)
//     console.log(myTotal)

const myShoppingCart = [
    {
        itemName: "Data Science Course",
        price: 10999,
    },
    {
        itemName: "FDE Course",
        price: 16999,
    },
    {
        itemName: "Agentic AI Course",
        price: 11999,
    },
    {
        itemName: "Generative AI Course",
        price: 14999,
    }

]

const myTotal = myShoppingCart.reduce((acc,item)=> acc + item.price , 0)

console.log(myTotal)
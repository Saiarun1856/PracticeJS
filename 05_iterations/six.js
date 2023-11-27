// const mynums = [1,2,3]

// const myTotal = mynums.reduce((acc,cur)=>{
//     console.log(`${acc}${cur}`)
//     return acc+cur
// },0) 
// console.log(myTotal)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const myTotal = shoppingCart.reduce((acc,val)=>{
    return acc+val.price
},0)
console.log(myTotal)
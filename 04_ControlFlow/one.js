// if
// let x= 'false'
// if('false'){
//     console.log("hello");
// }
// else{
//     console.log("bad")
// }

// let score =100


// if(score<=100){
//     const power = "fly"
//     console.log(`user power :${power} `)
// }

// const balance  = 1000

// if(balance>500) console.log("test")

const userLogin = true
const debitCard = true

if(userLogin && debitCard){
    console.log("Hey Welcome")
}


// console.log(`user power:${power}`)
//falsy values

//--> false,"",0 ,-0, BigInt 0n, null, undefined, NaN

// truthy values
// "0",'false'," ",[],{}, function(){}



// Nullish Coalescing Operator: null undefined

let val1;
val1 = 5??10
val1 = null ??10
val1 = undefined??15



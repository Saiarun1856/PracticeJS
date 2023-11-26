function calculatecartPrice(...num1){
    return num1
}
console.log(calculatecartPrice(5,3,3,4,6,3,3))
3
// const cartArray = calculatecartPrice(5,3,3,5,6,3,3)

// const totalPrice = cartArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// console.log(totalPrice);


const user = {
    username : "Arun",
    price:11
}

function values(anyObject){
    console.log(`user is ${anyObject.username} and price is ${anyObject.price}`)
}
values(user)

// const newArray = [12,34,5,6,7,8,2]

// function getArray(values){
//     return values[1]
// }
// result = getArray(newArray)
// console.log(result);
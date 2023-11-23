function calculatecartPrice(val1,val2,...num1){
    return num1
}
console.log(calculatecartPrice(5,10,30,20,30))


const user = {
    username : "Arun",
    price:11
}

function values(anyObject){
    console.log(`user is ${anyObject.username} and price is ${anyObject.price}`)
}
values(user)

const newArray = [12,34,5,6,7,8,2]

function getArray(values){
    return values[1]
}
result = getArray(newArray)
console.log(result);
// for of
array = [1,2,3,4,5,6,7]
for (const i of array) {
    console.log(i)
}


const map = new Map  // gives only unique values
map.set("IN","india")
map.set("USA","United States of America")
map.set("Fr","France")

console.log(map)

for(let [key,value] of map){
    console.log(key,value)
}

const myOBJ = {
    Name:"Arun",
    Age:21,
    Number:8106994233
}
for (const iterator in myOBJ) {
    console.log(`${iterator} in ${myOBJ[iterator]} `)
}
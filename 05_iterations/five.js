const myNums = [1,2,3,4,5,6,7,8,9,10]

// const add = myNums.map((num)=>{
//     return num = num+10
// })
// console.log(add)

// const nums = myNums.forEach((val)=>{
//     console.log(val = val+10);
// })

// chaining

const allNums = myNums
                .map((num)=>num*10)
                .map((num)=>num+1)
                .filter((num)=>num>=40)

console.log(allNums)
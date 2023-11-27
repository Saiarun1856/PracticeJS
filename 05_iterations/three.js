const coding = ["js","ruby","cpp","python"]

// coding.forEach( function (item) {
//     console.log(item)
// })
// coding.forEach(  (item)=> {
//     console.log(item)
// })


const myCoding = [
    {
        item:"apples",
        price:"10$"
    },
    {
        item:"bananas",
        price:"15$"
    },
    {
        item:"pineapples",
        price:"20$"
    }
]

myCoding.forEach((key)=>{
    console.log(key.item)
})
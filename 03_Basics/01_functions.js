function hello(){
    console.log(1)
    console.log(2)
    console.log(3)
    console.log(4)
    console.log(5)
    console.log(6)
}

// hello //reference
hello() //execution

// function addTwoNumbers(x,y){ //parameters
//      console.log(x+y)
// }
// addTwoNumbers(3,4) //arguments
function addTwoNumbers(x,y){ //parameters
     let result = x+y
     return result
}
const result = addTwoNumbers(3,4) //arguments
console.log("result",result)


function loginUserMessage(username){
    if(username === undefined ){
        console.log("cannot accessible")
        return
    }
    return `${username} logged in`
}
console.log(loginUserMessage())
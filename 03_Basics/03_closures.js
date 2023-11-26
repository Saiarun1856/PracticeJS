// if(true){
//     const userName = "Arun"
//     if(userName == "Arun"){
//         const website = "youtube"
//         // console.log(userName+website)
        // console.log(userName)
//     }
//     console.log(website) 
// }



// ++++++++++++++++++++++intresting+++++++++++++++++++

// on hoisting
// addOne(3)
function addOne(num){
    return num+1
}
// console.log(addOne(5))
addTwo(3) //Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num+2
}
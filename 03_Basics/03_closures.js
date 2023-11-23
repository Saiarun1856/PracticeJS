if(true){
    const userName = "Arun"
    if(userName == "Arun"){
        const website = "youtube"
        console.log(userName+website)

    }
    // console.log(website) // throws error because of scope
}



// ++++++++++++++++++++++intresting+++++++++++++++++++

// on hoisting
addOne(3)
function addOne(num){
    return num+1
}

// addTwo(3) //Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num+2
}
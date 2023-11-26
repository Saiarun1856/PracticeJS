const user = {
    name:"arun",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.name},welcome to website`)
        console.log(this)
    }
}
// this refers to the current context works only under objects
// user.welcomeMessage()
// user.name = "sam"
// user.welcomeMessage()

// console.log(this)


// function chai(){
//     let userName ="arun"
//     console.log(this.userName)  // undefined coz we cannot use "this" in functions
// }
// chai()

// const chai = function (){
//     let userName ="arun"
//     console.log(this.userName) 

// }
// chai()
// const chai =  ()=>{
//     let userName ="arun"
//     console.log(this.userName) 

// }
// chai()


//arrow function

// ()=>{} //simple representation of arrow function
 
const value =(num1,num2)=> ({name:"Arun"})

console.log(value(2,3));

// implicit return  - where we can write arrow function where we dont use parenthesis and write in single line

// const value = (num1,num2)=> num1+num2

// to use objects

// const value = (num1,num2)=> ({userName:"Arun"})
// console.log(value(2,3));

  
// const newObject = new Object()
const Objectss  = {}

Objectss.id = 23
Objectss.name = "Sai Arun Vakacherla"

console.log(Objectss)


const regularUser = {
    email:"saiarunmahindra@gmail.com",
    fullname:{
        firstname:"Sai Arun",
        lastname:"Vakacherla"
    }
}
console.log(regularUser.fullname.lastname)


const obj1 = {a:1,b:2}
const obj2 = {c:1,d:2}

const obj3 = Object.assign({},obj1,obj2)
// const obj3 = {...obj1,...obj2}

// console.log(obj3)

// console.log(Object.keys(regularUser))  // returns a array with keys
// console.log(Object.values(regularUser))  // returns a array with Values


// object destructuring
const myObj = {
    names:"Sai Aruns",
    id:20
}

const {names : yes} = myObj

console.log(yes)



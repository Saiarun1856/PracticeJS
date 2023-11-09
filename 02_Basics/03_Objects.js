
// object literals


const mySym = Symbol("key1")
const objects = {
    name:"Arun",
    [mySym]:"mysmi1",// to use symbols in objects
    age:21,
    location:"India",
    emali:"arun@google.com",
    isLoggedIn:false,
    lastLoggedIn:["monday","Tuesday"]
}

console.log(objects)
// Object.freeze(objects)
objects.age = 22

/**
 * dsfdgfhhgfdss
 * @params fdfj, djh
 */
const myFunc = function(){

}
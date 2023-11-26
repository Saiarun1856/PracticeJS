if(true){
    let a= 10
    var b= 20
    const c= 30
}
// console.log(a);
console.log(c); //here comes the problem as block scope elements cannot be accesssed for global scope but we are able to acc block elements using var
// console.log(c);
/*

*/
// function one(){
//     const userName = "Arun"
//     function two(){
//         const website="youtube"
//         console.log(userName)
//     }
//     console.log(website);
//     two()
// }
// one()
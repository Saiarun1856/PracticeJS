//   (IIFE) -- to avoid global scope pollution such as declarations,variables etc we use iife


(function values(num1){
    console.log("connected DB")
})(2); // this get error coz we also need to wrap up function in curly braces

// to use another iife we need to keep semicolon to break previous context

(()=>{
    console.log("connected DB2")
})();

// to access values inside iife

((name)=>{
    console.log(`connected DB2${name}`)
})("Arun"); // pass through here

let newString = "Hello world"

console.log(newString);
console.log(newString.charAt(6));
console.log(newString.toUpperCase());
console.log(newString.indexOf("o"));

const subStrings = newString.substring(0,4)
console.log(subStrings)

const subsString = newString.slice(1,9)
console.log(subsString)

console.log(subStrings.replace("H","L"))
console.log(subStrings.includes("H"))
// default parameters
function message(text ="it s default parameters") {
    console.log(text)
}
message("i love ES6");
message()


// rest Parameters
function printNumber(x,y,...z){
console.log(`x=${x},y=${y},z=${z}`)
}
printNumber(10,20,580,30,12,45);

// spreed operators
function addNumber(x,y,z){
    return x+y+z;
}
let number =[10,20,30]
console.log(addNumber(...number))

// second example spreed operator
let p1 = {
name:"mahabub alam",
age:30
}
let p2 = {
    name:" alam",
    age:60
    }
let p = {...p1, ...p2}
    console.log(p)
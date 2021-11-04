// function message(text ="it is default value"){
// console.log(text)
// }
// message("es6 is good")
// message()

// function printNumber(x,y,...z){
// console.log(`x=${x},y=${y},z=${z}`)

// }
// printNumber(10,20,30,40,50);


function addNumber(x,y,z){

    return x+y+z
}

let number = [10,20,30,40]
console.log(addNumber(...number));
addNumber()

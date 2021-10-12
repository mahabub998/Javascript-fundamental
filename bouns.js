// var marks = [89,50,40,25,20];

// for (var i = 0; i < marks.length; i++){
//     var element = marks[i];
//     console.log(element);
// }


// function add (number1,number2){
//     var total = number1+number2;
//     return total;
// }

// var result = add(45,75)
// console.log(result)

var number = [89,50,40,25,20];
function largestNumber(numbers){
    var larger = numbers[0]
    for ( var i = 0; i< numbers.length; i++ ){
        var element = numbers[i];
        console.log(element)
        if(element > larger){
            larger = element;
        }
    }
    return larger;
} 
 var output = largestNumber([45,78,56])
 console.log('output',output)
const user = {
    id:1,
    name:"sakib",
    age:23,
    education:{
        degree:"master"
    }
}
// let name = user["name"]

// destructing
let {id,name,age,education:{degree}} =  user;
console.log(degree)
// console.log(name)



// Arry destrucuring
//destructuring 
let person = {
    name: 'sunil',
    age : 30
}
// const {name : id ,age} = person 
// console.log(person.name)
// console.log(id,age)

let ages = [23,45,67]
// let [x,y] = ages 
//spread => 

let age1 = [3,6]

let newAge = [...ages,45,...age1]
console.log(newAge)

//rest => 
function max(name,...num){
    console.log(num)
}
// function sum(a,b,c){
//     console.log(arguments)
// }
// sum(3,6,8)

// max(3,5,7,8)


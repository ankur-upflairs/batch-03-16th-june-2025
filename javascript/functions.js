//function => fn is a block of code to perform specific task that can be reused

//normal fn , fn expression (anonymus fn), arrow fn
//normal fn => this
//hoisting 
function sum(a,b){
    // console.log(a+b)
    return a+b 
}

// let x = sum(23,12)
// console.log(x)
//normal fn => this
//not hoisting 
let square = function (a){
    return a**2
}
// console.log(square(12)) 
//arrow fn => not this 
//not hoisted  
// let cube = (x) => { return x**3 }
//when single argument is given than remove ()
// when there is only one statement than remove {} 
//if there is only one statement than it is return by default
let cube = x =>  x**3 

// console.log(cube(4))

//cb function => a fn that is passed in another fn and called inside it 

// function calculateAndMultiBy5(fnc , a){
//     let b = fnc(a)
//     return b*5
// }
// let z = x=>x+10
// console.log(calculateAndMultiBy5(z, 3))
// console.log(calculateAndMultiBy5(x=>x+12, 3))



















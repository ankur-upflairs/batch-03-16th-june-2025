// const fs = require('node:fs')
const prompt = require('prompt-sync')()

const { readdirSync, unlinkSync } = require('fs')
// let data = fs.readFileSync('sample.txt','utf-8')

// console.log(data) 
// fs.writeFileSync('sample1.txt','this file write by code ')

// fs.appendFileSync('sample.txt','\n this is new text added')

//async promise based function 
const fs = require('fs/promises')
// console.log('start')
// fs.readFile('sample.txt','utf-8')
// .then(data=>{
//     console.log(data)
// })
// .catch(err=>console.log(err))
// console.log('end')

// fs.writeFile('sample1.txt','text is added by promises')
// .catch(err=>console.log(err))

// fs.appendFile('sample1.txt','\n appeded text')

// read the files of current working directories and print them 
//eg - readdir 
//make a function to create tables in different file from 2 to 10 
// make a cli based file saver (prompt-sync) 
//make cli based file deleting or creating or updating system
//(unlink)

let choice = prompt('Enter: - 1. for delete \n 2. for create')
let allFiles = readdirSync(__dirname)
if(choice == 1 ){
    // console.log(allFiles)
    for (const i in allFiles) {
        console.log(`no. ${i} : - ${allFiles[i]}`)
    }
    let x = prompt('enter the no. of file you want to delete?')
    unlinkSync(allFiles[x])
    console.log('file deleted successfully')
}
else if(choice == 3){
    for (const i in allFiles) {
        console.log(`no. ${i} : - ${allFiles[i]}`)
    }
    let x = prompt('enter the no. of file you want to update?')
}




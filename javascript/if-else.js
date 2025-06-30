var prompt = require('prompt-sync')();
// let age =20
let age =prompt('enter your age : - ')
age = parseInt(age)

if(age > 18){
    console.log('adult')
}
else{
    console.log('minor')
}
/*
Check Even or Odd:
Write a program that takes a number as input and checks whether it is even or odd using if-else.

Positive, Negative, or Zero:
Write a program that takes a number as input and determines if it is positive, negative, or zero.

Greatest of Two Numbers:
Write a program that takes two numbers and prints which one is greater using if-else.

Voting Eligibility:
Write a program that takes age as input and checks if the person is eligible to vote (age ≥ 18).

Check Divisibility:
Write a program that takes a number and checks whether it is divisible by 5 and 11.

Check Leap Year:
Write a program that takes a year as input and checks if it is a leap year.

Pass or Fail:
Write a program that takes marks as input and checks if the student passed (passing marks: 33 or above).

Check Alphabet Case:
Write a program that takes a single character input and checks whether it is uppercase or lowercase.

Day of the Week:
Write a program that takes a number (1 to 7) and prints the corresponding day of the week using if-else.

Check Character Type:
Write a program that takes a character and checks if it is an alphabet, digit, or special character.

*/
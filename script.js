console.log("Hello world");


// Variable declarations

// var, let, const

// var x = 12; // not used frequently

let y = 'JS', m; // variable declaration + initialize

//  = -> assignment

// console.log(y);

y = 999; // varaible initialize

const z = 22;

// console.log(x, y, z, m);

// console.log("Test");

//  JS is not strictly typed language / weakly typed 

// string, number, boolean, undefined, null, bigint, symbol -> primitive data types
// array, object -> non primitive data types

let arr1 = [];
let arr = ['a', 'b', 1, true, 'e']; // collection of different values

// 0 -> a, 1 -> b, 2 - 1, 3 -> true, 4 -> e

// console.log(arr[4]);


// object -> structured data
//  key: value
let obj = {};
let user = {
  name : 'Shivam',
  age: 24,
};

let propertyToAccess = 'age'

// console.log(user.name); // dot notation
// console.log(user[propertyToAccess]); // -> bracket notation/computed property


// conditions
// if else statements


// if -> else
// if -> else if... -> else

// if(c == 22) {
//   console.log("c is 22")
//   // logic
// } else if (c === 44) {
//   console.log("c is 44");
// } else if (c == 66) {
//   console.log("c is 66");
// } else {
//   console.log("c not found");
//   // logic
// }

// if((c > 100) || (c < 5)){
//   console.log("found")
// } else {
//   console.log('not found')
// }

// Operators

// comparison operators
// == -> conditional -> true / false
// === -> strict checking -> type checking
// !=, !==
// > , <, >=, <=

// logical operators

//  AND -> && (value1 && value2 -> value1 = true and value2 = true then only it is true else false)
// OR -> || (value1 || value2 -> value1 = false and value2 = false then only false else true )
// ! NOT -> invert the value

// Unary operators

// let x = 5;
// x = x + 1;
// console.log(x);
// x++; // x = x + 1
// console.log(x);

//  increment
// ++
  // x++ => x = x + 1
  // post increment 
  // pre increment
//  decrement
  // post decrement
  // pre decrement

// console.log(!true)


// if(c == 22) {
//   console.log("c is 22")
//   // logic
// } else if (c === 44) {
//   console.log("c is 44");
// } else if (c == 66) {
//   console.log("c is 66");
// } else {
//   console.log("c not found");
//   // logic
// }

// switch case

// let c = 7;

// switch (c) {
//   case 22:
//     console.log("22 found");
//     break;
//   case 44:
//     console.log("44 found");
//     break;
//   case 66:
//     console.log("66 found");
//     break;
//   default:
//     console.log("value not found");
//     break;
// }

// loops
//  FOR loop
for(let i = 0; i < 0; i++) {
  console.log(i);
}

// let arr2 = [22, 3, 12, 5, 67, 99, 11];

// console.log(arr2.length)

// print all elements of array

// for(let i = 0; i < arr2.length; i++){
//   // console.log(arr2[i]);
// }

//   WHILE loop

let a = 5;

while(a < 10) {
  // console.log("hello")
  a++;
}

// DO ... WHILE loop => exit control loop
let i = 0;

do {
  console.log(i);
  i = i + 1;
} while (i < 0);


// string concatenation

// let str = 'Hello';

// console.log(str.length);

// str = str + ' ' + 'Sunday'

// console.log(str)

//  Type coercion

// Built in class
// Array
// String

// functions in JS

// function in JS are first class citizens
//  => functions can be stored in varaibles
// => functions can be passed as arguments
// => functions can be returned from another function

// Function declaration
function sayHello(name, x, y) { // parameter
  console.log("Hello " + name)
}

// function expression
let functionExpression = function(name) {
  console.log('Hi i am a function expression');
}

// sayHello('Shivam', 1, 2);

// functionExpression();

// function passed as argument to another function

function functionArgument(f) {
  f('Aniket');
}

// functionArgument(sayHello)

// function being returned from another function
function returningFunction() {
  return function () {
    console.log("I am returned function");
  };
}

let func = returningFunction();
// func()



// arrow function

let greet = (name) => {
  console.log("Hi " + name);
};

let greet1 = (name) => console.log("Hi " + name);

let greet2 = (name) => 'Hi ' + name;

// greet();
// greet1();
// let message = greet2('shivam')

// console.log(message)


// built in array methods

// forEach

let arr2 = [22, 3, 12, 5, 67, 99, 11];

// print all elements of array

arr2.forEach(function(element) {
  console.log(element);
});

arr2.forEach((element) => console.log(element));
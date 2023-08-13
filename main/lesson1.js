// << Working with variables >>
// let myVariableName = <myData>

// variables and their data types

let myName = "Tomi😊"    //type: string
let myPin = 1237       //type: number
let isActive = true      //type: boolen
let myBanks = ['GTB', 'KUDA', 'ZENITH', 'PAYWISE'] //type: array
let myData = {
    name: 'Tomi😊',
    pin: 1237
} //type: object


// Homework 1
// Create your own variables and their data type in the 
// assigment folder. The data should be relative to bank data
// you can leave the arrary and objects
// data needed
// firstName, secondName, pin , age, isActive, currentBank, fullName, country and state



// << changing variables >>
let myNewName = "David👌"

// Note : to show your data on the terminal use "console.log()"


console.log(myName); // output: Tomi😊
myName = myNewName
console.log(myName) // output: David👌


// <Working With Strings>

let FirstName = 'John'
let SecondName = 'Doe'
let hisAge = 24

let FullName = FirstName + SecondName 
console.log(FullName);

let editedName = FirstName + " " + SecondName

console.log(FullName);
console.log(editedName);
console.log(editedName , " ", hisAge)


// Homework 2
// using your data in HomeWork1 use the data to generate an info about the bank user
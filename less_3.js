'use strict';

// create new object
let newObj = {}; // or new Object();
// console.log(newObj);

// create new object without prototype
const objNull = Object.setPrototypeOf({}, null);
// console.log(newNull);
// or
const objNull2 = {};
ogjNull2.__proto__ = null;
// console.log(newNull2);

// add new keys to the object in different ways
newObj.name = "Dima";
newObj['surname'] = "Mykoliv";
Object.assign(newObj, { position: "FE" });
newObj = { ...newObj, ...{ sity: "Lviv" }};
// console.log(newObj);

// create empty array
const newArray = [];

// create array with 100500 elements
const array = new Array(100500);

// create array with some elements;
const fullArray = [1, 3, 5, 9];
// make the filled array empty
fullArray.length = 0;

// function that removes an element from an array by its index and returns a new array
const initialArr =  [1,2,3,4,5];
function getArrayWithoutElement(arr, index) {
  return arr.filter((_, i) => i !== index);
}
// console.log(getArrayWithoutElement(initialArr, 3));

// function that check if array empty
function isArrayEmpty(arr) {
  return arr.length === 0;
}

// function that combines two arrays into one and returns it as a result
function getArrayFromArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

// get array with element in 3 degree
function getArrayTo3(arr) {
  return arr.map(item => item ** 3);
}

// get array with odd element
function getArrayWithOdd(arr) {
  return arr.filter(item => item % 2 === 1);
}

// get array only with integer 
function getArrayWithInteger(arr) {
  return arr.filter(item => Number.isInteger(item)); //or  item % 1 === 0
}

// function that return undefine
function someFun() {}



// my old task
//1
const obj = Object.setPrototypeOf({}, null);
//2
const array = new Array(100500);
//3
function getNewArray(arr, index) {
  return arr.filter((_, i) => i !== index); 
}
//4
function isArrayEmpty(arr) {
  return arr.length === 0;
}
//5
function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}
//6
function getArrayFromArrays(arr1, arr2) {
  return arr1.concat(arr2);
}
//7
function getArrayTo(arr) {
  return arr.map(item => item ** 3);
}
//8
function getArrayWithOdd(arr) {
  return arr.filter(item => item % 2 === 1);
}
//9
function getArrayWithInteger(arr) {
  return arr.filter(item => item % 1 === 0); //or Number.isInteger(item)
}
//10
function getCapitalizeText(str) {
  return str.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ');
}

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

const newArray = [];
const array = new Array(100500);




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

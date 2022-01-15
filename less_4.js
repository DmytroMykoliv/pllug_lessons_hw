"use strict";

// the function which would receive an array from elements of various types, and return string in camel case
function getCamelCase(arr) {
  let tempArr = arr
    .filter(item => typeof item === 'string')
    .map((item, i) => {
        if (i > 0) {
            return item[0].toUpperCase() + item.slice(1).toLowerCase();
        }
        return item.toLowerCase();
     });

  return tempArr.join('');
}

// function that receives array of integers, and return an array of English letter
function getArrayOfLetters(arr) {
    return arr.map(item => String.fromCharCode(96 + item));
}

// function that receives an object and returns a new object that contains only numbers greater than 0
function filteredObject(obj) {
  const tempObj = Object.entries(obj).filter(item => item[1] >= 0);

  return Object.fromEnries(tempObj);
}

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
  const tempObj = Object.entries(obj).filter(item => typeof item[1] === 'number' && item[1] >= 0);

  return Object.fromEnries(tempObj);
}

// Script that displays the date and time when the DOM was built, but css, the image is not yet loaded
    <script>
      document.addEventListener("DOMContentLoaded", () => {
        const date = new Date();
        console.log('DOM tree is build, but not css and pictures date:', date.toLocaleDateString(),'at:', date.toLocaleTimeString());
      });
    </script>

// Script that displays the date and time when the DOM was built and css, the images have already been loaded
    <script>
        window.onload = () => {
        const date = new Date();
        console.log('Page is build at:', date.toLocaleString());

      // display name of browser and name of operating system
        console.log(navigator.userAgent.split(' ').join(' - '));
      }
    </script>

// Script that display notifications when you try to reload a page, remove a tab, or turn off the browser
    // try writing something in the input field and reload the page
    <input type="text" id="input_field" placeholder="some">
    <script>
       window.onbeforeunload = () => {
        // console will display date if page will be reloaded, closed or remove a tab
        console.log(date.toLocaleString());
        
        return false;
      }
    </script>

// Script that displays in console how many seconds user spend on the page after clicked on close the tab or reload the page.
    <script>
      let time = 0;

      const timer = setInterval(() => {
        time++
      }, 1000);

      window.addEventListener("unload", function() {
        console.log(time);
        clearInterval(timer);

        return false;
      });
    </script>

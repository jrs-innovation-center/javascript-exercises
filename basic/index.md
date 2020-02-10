---
title: JavaScript Exercises - Basic
description: Basic Exercises for javascript
---

<script src="https://embed.runkit.com"></script>
<script src="script.js"></script>


## Basic Exercises

### 1. Write a JavaScript program to display the current day and time in the following format.

> Sample Output : Today is : Friday.

> Current time is : 4 PM : 50 : 22

<div class="runkit"></div>

### 2. Write a JavaScript program to get the current date.

> Expected Output :
> mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

<div class="runkit"></div>

### 3. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

<div class="runkit"></div>

### 4. Write a JavaScript program to rotate the string 'codeisfun' in right direction by periodically removing one letter from the end of the string and attaching it to the front.

<div class="runkit"></div>

### 5. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

<div class="runkit"></div>

### 6. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.

<div class="runkit"></div>

### 7. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".

<div class="runkit"></div>


### 8. Write a JavaScript program to calculate days left until next Christmas.

<div class="runkit"></div>

### 9. Write a JavaScript program to calculate multiplication and division of two numbers (input from user).

<div class="runkit"></div>

### 10. Write a JavaScript program to convert temperatures to and from celsius, fahrenheit.

> [ Formula : c/5 = (f-32)/9 [ where c = temperature in celsius and f = temperature in fahrenheit ]

> Expected Output :

> 60°C is 140 °F

> 45°F is 7.222222222222222°C

<div class="runkit"></div>

### 11. Write a JavaScript program to get the website URL (loading page).

<div class="runkit"></div>

[Index](/)


<script>
/**
 * returns list of elements based on s
 * 
 * @param {string} s - css selector
 * @return {array} - array of elements
 */
function selectors(s) {
  return Array.prototype.slice.call(document.querySelectorAll(s)) 
}

/**
 * creates a runkit notebook object for each element
 *
 * @param {object} element
 * @return {object}
 */
function transform(element) {
  if (RunKit) {
    const source = element.innerText
    element.innerText = ''
    RunKit.createNotebook({ element, source, nodeVersion: '13.0.0' })
  }
  return element
}

/**
 * manual curry map function, takes a function then 
 * returns a function which takes an array and 
 * then maps over the array applying the function
 */
function map (fn) {
  return function (list) {
    return list.map(fn)
  }
}

/**
 * basic compose function
 *
 * takes function a and function b, then returns
 * a function for a value
 *
 * invokes b then a to return a result
 */
function compose(a,b) {
  return function (v) {
    console.log(b(v))
    return a(b(v))
  }
}

// invokes the runkit transformation for each element
compose(map(transform), selectors)('.runkit')

</script>

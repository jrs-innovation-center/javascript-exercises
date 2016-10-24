## Ramda Exercises

<a href="http://ramdajs.com/docs/" target="_blank">Ramda Documentation</a>

A practical functional library for Javascript programmers.

These exercises are meant to get basic reps using the ramda functional library,
you will want to look up using the documentation the right ramda methods to use.

<a href="http://fr.umio.us/why-ramda/" target="_blank">Why Ramda?</a>

### 1. Use Ramda to check if the test data is an array.

> Test Data :  
console.log(__('w3resource'));     
console.log(__([1, 2, 4, 0]));    
false
true

<div class="tonic">
<pre>
const R = require('ramda')

</pre>
</div>

### 2. Use a Ramda function to takes a value and returns the value.

<div class="tonic">
<pre>
const R = require('ramda')

</pre>
</div>

### 3. Use a Ramda function to print the length of an Array

<div class="tonic">
<pre>
const R = require('ramda')

const x = [1,2,3,4,5,6]

</pre>
</div>

### 4. Use Ramda to create an array of numbers counting from 1 to 100.

<div class="tonic">
<pre>
const R = require('ramda')

const x = [1,2,3,4,5,6]

</pre>
</div>

### 5. Use Ramda to return true if the following list contains 'blue'

<div class="tonic">
<pre>
const R = require('ramda')

const colors = ['red', 'green', 'blue']

</pre>
</div>

### 6. Use Ramda to convert the following sentence into an array of words.

<div class="tonic">
<pre>
const R = require('ramda')

const x = 'The brown fox jumps over the white fence.'

</pre>
</div>


### 7. Use a Ramda function to transform this array of colors to their hex
equivalent.

<div class="tonic">
<pre>
const R = require('ramda')
const convert = require('color-convert')
// hint: convert.keyword.hex is a function taht takes
// a color and converts to hex

const colors = ['red', 'blue', 'green', 'yellow', 'peru']

const hexColors = __
console.log(hexColors)

</pre>
</div>

### 4. Use Ramda filter function to count the the number of buzzwords in the provided text

<div class="tonic">
<pre>
const R = require('ramda')
const buzzwords = require('buzzwords') // array of 235 buzzwords

const corporateIpsum = \`
Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.

Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.

Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.

Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximize the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.

Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.
\`

// print out the number of buzzwords in this text - Answer: 16

console.log(__)

// be sure to set your node version to v6
</pre>
</div>

### 8. Use Ramda to add 2 numbers together

> Test Data     
10, 20 - should equal 30     
300, 500 - should equal 800  

<div class="tonic">
<pre>
const R = require('ramda')

</pre>
</div>  

### 9. Use Ramda to subtract 2 numbers

> Test Data     
20, 10 - should equal 10   
500, 300 - should equal 200  

<div class="tonic">
<pre>
const R = require('ramda')

</pre>
</div>  

### 10. Use Ramda to calculate this equation

> 10 * 10 / 2 - 8   
should equal 42

<div class="tonic">
<pre>
const R = require('ramda')

</pre>
</div>  

### 11. Use Ramda to add 10 to a list of numbers

> Hint: use the add(x) function to create an add10 function

<div class="tonic">
<pre>
const R = require('ramda')

const nums = [1,2,3,4,5,6,7,8,9,10]

</pre>
</div>  

### 12. Write a Ramda program to list the keys of a JavaScript object.

<div class="tonic">
<pre>
const R = require('ramda')

const student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
}

</pre>
</div>  


### 13. Write a Ramda program to list the values of a JavaScript object.

<div class="tonic">
<pre>
const R = require('ramda')

const student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
}

</pre>
</div>  


[Index](/)

# Map Functions

Mapping is about transforming data from one value to another.

### 1. Use the number to words module and map, to transform this
array of number to array of words

<div class="tonic">
<pre>
const converter = require('number-to-words')

// converter.toWords(10)  // ten

const numbers = [1,2,3,4,5,6,7,8,9,10,20,30,99, -2]

</pre>
</div>

### 2. Use the map function to add 10 to array of numbers

<div class="tonic">
<pre>

const numbers = [1,2,3,4,5,6,7,8,9,10,20,30,99, -2]

</pre>
</div>

### 3. Use the map function and hyperscript to tranform a list of strings to
an unordered list

[hyperscript docs](https://github.com/dominictarr/hyperscript)

<div class="tonic">
<pre>
const h = require('hyperscript')

const buzzwords = require('buzzwords')

const li = (w) => h('li', w)

console.log(h('ul', __ ))

</pre>
</div>

### 4. Use the map function to convert a list of colors to their rgb code.

<div class="tonic">
<pre>
const convert = require('color-convert')
const cssColorList = require('css-color-list')

// ex: convert.keyword.rgb('red')

</pre>
</div>

### 5. Use the map function transform a list of movies objects from a movie
db search into a list of movie posters.

<div class="tonic">
<pre>
const h = require('hyperscript')


const xhr = require('xhr')
const search = (query, callback) => {
  xhr({
    method: 'GET',
    json: true,
    url: 'http://www.omdbapi.com/r=json=q=' + query
  }, (e,r,b) => {
    if (e) {
      console.log(e)
      callback(e)
      return
    }
    callback(null, b)
  })
}

const img = (url) => h('img', {src: url})

search('batman', (e,b) => {
  // map over results and show movie posters   
})

</pre>
</div>

[Index](/)

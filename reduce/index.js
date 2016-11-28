# Reduce Exercises

Reduce takes a list or collection and returns a single value.

### 1. Use reduce to add the list of numbers together and return the sum.

<div class="tonic">
<pre>

const numbers = [1,2,3,4,5,6,7,8,9,10,20,30,99]

</pre>
</div>

### 2. Use reduce to count the number of items that are true

<div class="tonic">
  <pre>
const items = [false, true, false, true, true]

  </pre>
</div>

### 3. Use reduce to return an object of key value pairs from paired arrays,
where index 0 is the key and index 1 is the value

<div class="tonic">
  <pre>
const data = [['name', 'Larry'], ['type', 'person'], ['address', '123 Main Street']]

  </pre>
</div>

### 4. Use reduce to concat a variadic set of arguments into a single list

<div class="tonic">
  <pre>
function concat(...args) {
  // TODO: add reduce here
}

concat([1,2,3],[4,5,6],[7,8,9])
  </pre>
</div>

### 5. Use reduce to create your own filter function

<div class="tonic">
  <pre>
function filter (fn, list) {
  // TODO: use reduce to create your own filter
}

// filter to even numbers
filter(v => v % 2, [1,2,3,4,5,6,7,8,9,10])
  </pre>
</div>

### 6. Use reduce to create your own reject function

<div class="tonic">
  <pre>
function reject (fn, list) {

}

// reject even numbers
reject(v => v % 2, [1,2,3,4,5,6,7,8,9,10])

  </pre>
</div>

### 7. Use reduce to create your own find function

<div class="tonic">
  <pre>
function find (fn, list) {

}

// find waldo
find(v => v === 'waldo', ['Larry', 'Curly', 'Moe', 'Waldo', 'Jim', 'Harry'])
  </pre>
</div>

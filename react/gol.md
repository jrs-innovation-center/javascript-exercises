# React Game-Of-Life Challenge

In this exercise you will use the game of life engine
to build a react game of life simulation.

## Setup

```
mkdir react-gol
cd react-gol
npm init -y
npm install react react-dom react-scripts -S
npm install json -g
npm install gol-functional -S
json -I -f package.json -e 'this.scripts = { "start": "react-scripts start"}'
mkdir public src
touch public/index.html
touch src/index.js
```

> We need two files to get started, one is the html file we will attach our app to.

### Edit index.html

```
<!doctype html>
<html>
  <head>
    <title>Relief Tracker</title>
    <!-- include your css here -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css" />
    <link rel="stylesheet" href="https://unpkg.com/tachyons@4.5.5" />

  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

> We need to initialize our react app using index.js. All of our code files will
live in the src directory.

### Edit index.js

```
const React = require('react')
const ReactDOM = require('react-dom')

const App = () => <h1>Hello, React</h1>

ReactDOM.render(<App />, document.getElementById('root'))

```

### start server

```
npm start
```

### create app.js

```
const React = require('react')

const App = React.createClass({
  render () {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    )
  }
})

module.exports = App
```

### require app.js

in index.js

replace

```
const App = () => <h1>Hello, React</h1>
```

with

```
const App = require('./app')
```

---

## GOL Functional Module

https://github.com/twilson63/gol-functional


## Step 1

* Setup Initial State

Add two nodes:

- sim: null
- board: []


## Step 2

* Add a start stop button

## Step 3

* Add the ability to render the board, it will
be an array of rows and an array of columns in
each row.

## Step 4

* when the component mounts create the gol sim and
add the sim to the state, so you can handle the start and stop buttons

## Step 5

* handle start button

## Step 6

* handle stop button

## Step 7

* when stopped and a cell is clicked, toggle the
state of the cell.

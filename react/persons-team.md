# Persons to Teams

In this exercise we will walk through creating
two lists, one list will be a list of persons and
the other list will be a team.

As a user, you can
* add a person to a team
* remove a person from a team

## Setup

```
mkdir persons-team
cd persons-team
npm init -y
npm install react react-dom react-scripts -S
npm install json -g
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

## Step 1


> In app.js, Setup the state with the getInitialState method

```
getInitialState: function() {
    return {
      persons: [{
        name: 'Tom',
        id: 1
      }, {
        name: 'Trip',
        id: 2
      }, {
        name: 'Derek',
        id: 3
      }, {
        name: 'Kendra',
        id: 4
      }, {
        name: 'Andrea',
        id: 5
      }, {
        name: 'Jared',
        id: 6
      }, {
        name: 'Joshua',
        id: 7
      }, {
        name: 'Chris',
        id: 8
      }, {
        name: 'Alex',
        id: 9
      }, {
        name: 'Joe',
        id: 10
      }, {
        name: 'Cameron',
        id: 11
      }, {
        name: 'Matt',
        id: 12

      }],
      members: [{
        name: 'Tom',
        id: 1
      }, {
        name: 'Trip',
        id: 2
      }]
    };
  }
```

---

Show Persons

In app.js render method add a list of persons

```
render() {
  return (
    <div>
      <div style={{float: 'left'}}>
        <h3>People</h3>
        <ul>
          {this.state.persons.map(p =>
            <li key={p.id}>
              {p.name}
              <button>Add Member</button>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
```

> Verify you now have a list of persons in your browser

---

## Step 2

Create the team member list.

```
render () {
  return (
    <div>
      ...
      <div style={{float: 'left'}}>
        <h3>Team</h3>
        <ul>
          {this.state.members.map(m =>
            <li key={m.id}>
              {m.name}
              <button>Remove</button>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

```

> Verify you now have a member list in your browser

---

## Step 3

Create Add Member method

```
  getInitialState () { ... },

  addMember (person) {
    return (e) => {
      // Add Person to members list
      // and setState
    }
  },

  render () {...}
```

Link addMember function to onClick handler on the add member button.

> Verify you can add members from the persons list

---

### Step 4

Create Remove Member method

```
  getInitialState () { ... },
  addMember (person) { ... },
  removeMember (member) {
    return (e) => {
      // remove member from members list
      // setState
    }
  },
  render () { ... }
```

> Verify you can remove members from the members list

---

### Step 5

> Integrate functionality into your relief-tracker app
on the efforts show page.


In your show.js component for Efforts you want to
create two methods

* addMember
* removeMember

You just need to set the state of the effort.members

```
let effort = {...this.state.effort}
// do your add or remove
effort.members = [member, ...effort.members.filter(...)]
this.setState({effort})
```


### Step 6

* create an `update team` button
* updateTeam method


```
updateTeam (e) {
  e.preventDefault()
  this.props.put('efforts', this.state.effort, (err, result) {
    if (err) console.log(err.message)
    this.setState({team: 'updated!'})
  })
}
```

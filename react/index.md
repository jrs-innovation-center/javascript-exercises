# React Tutorial

This is a practice tutorial, follow it step by step to create a basic react application.

## Pre Reqs

* NodeJS v6.9.1 or greater http://nodejs.org
* Text Editor

## Menu

* [Setup](setup)
* [Step 1](1)
* [Step 2](2)
* [Step 3](3)
* [Step 4](4)
* [Step 5](5)




---

# Persons/show

```
const React = require('react')

const Person = React.createClass({
  render () {
    return (
      <div>
        <h3>Famous Person</h3>
      </div>
    )
  }
})

module.exports = Person

```
---

Add xhr

```
const React = require('react')
const xhr = require('xhr')
const {Link } = require('react-router')
const Person = React.createClass({
  getInitialState () {
    return {
      person: {}
    }
  },
  componentDidMount() {
    xhr.get('http://localhost:4000/persons/' +
      this.props.params.id, {
        json: true
      }, (err, response, person) => {
        if (err) return console.log(err.message)
        this.setState({person})
      }
    )
  },
  render () {
    return (
      <div>
        <h3>{this.state.person.firstName
          + ' ' + this.state.person.lastName}</h3>
        <Link to="/persons">Return</Link>
      </div>
    )
  }
})

module.exports = Person
```

---

# form

```
const React = require('react')
const {Link} = require('react-router')
const labelStyle = { display: 'block' }

const PersonForm = React.createClass({
  render() {
    return (
      <div>
        <h1>New Person Form</h1>
        <form>
          <div>
            <label style={labelStyle}>First Name</label>
            <input type="text" />
          </div>
          <div>
            <label style={labelStyle}>Last Name</label>
            <input type="text" />
          </div>
          <div>
            <label style={labelStyle}>Email</label>
            <input type="email" />
          </div>
          <div>
            <label style={labelStyle}>Phone</label>
            <input type="text" />
          </div>
          <div>
              <button>Save</button>
              <Link to="/person">Cancel</Link>
          </div>
        </form>
      </div>
    )
  }
})

module.exports = PersonForm

```

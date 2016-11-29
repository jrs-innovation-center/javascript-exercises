# React Todo Exercise

A simple react todo application

https://github.com/jrs-innovation-center/react-todomvc

## Setup

```
git clone ...
cd react-todo
npm install
atom .
npm start
```

## Step 1 - paint items from app state

* create initial state

```
{
  todos: [{
    id: 1,
    title: 'Pick Final Project',
    completed: false
  }, {
    id: 2,
    title: 'Plan Final Project',
    completed: false
  }]
}
```

* render state using map

> Included is a module fun-fp you can use the
map function from fun-fp or you can use the array
map function, but the goal is to map over the
todos and display them using the `TodoItem`
component

## Step 2 - add todo item

* create controlled input and submit form
* append new item to state

## Step 3 - toggle complete

* create onToggle function
* pass to todo-item as prop
* if the item is completed add `completed to the classname`

## Step 4 - edit todo item

* TodoItem needs its own state
  editText: this.props.todo.title
* TodoItem needs to handle the following events
  - handleEdit
  - handleChange
  - handleSubmit

* View Label should listen for double click event
  - onDoubleClick = this.handleEdit

* Edit Input should be controlled
  - value = this.state.editText
  - onChange = this.state.handleChange
  - onBlur = this.state.handleSubmit

* Implement editText, handleChange, handleSubmit on TodoItem Component

* Render method should change li className to editing if this.props.editing is not null

* App should pass the following props to TodoItem
  - editing = this.state.editing
  - onEdit = this.editTodo(todo)
  - onSave = this.saveTodo(todo)

* Implement editTodo and saveTodo on app component

## Step 5 - delete item

* When the delete button is clicked we want to
tell the app state to remove the item


## Step 6 - show active item count

* reduce over todos and inc completed = false

## Step 7 - filter active items and filter completed items and all items

* toggle viewState = 'active'
* on render filter todos based on viewState

## Step 8 - clear completed

* handle completed click and filter todos and assign filtered list

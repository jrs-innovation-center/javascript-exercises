## Setup

In the setup, we will create a json test api that will be our server, we will
use it to retrieve and store data for our application.

```
mkdir relief-tracker
cd relief-tracker
mkdir api
mkdir web
cd api
npm init -y
npm install json -g
npm install json-server -S
json -I -f package.json -e 'this.scripts = {"start": "json-server --watch db.json --port 4000"}'
touch db.json
```

Open your editor and add the following to your `db.json` file

> If you are using atom you can open your editor by `atom .`

```
{
  "persons": [],
  "efforts": [],
  "locations": []
}
```

Save the db.json

then run `npm start`

You should see the following:

```
\{^_^}/ hi!

  Loading db.json
  Done

  Resources
  http://localhost:4000/persons
  http://localhost:4000/efforts
  http://localhost:4000/locations

  Home
  http://localhost:4000
```

You can press `ctrl-c` to stop your server.

Navigate back to the project directory

```
cd ..
```

Then navigate into the web directory

> We are going to create a web project directory and install react and react react-router
then setup our project start script to run our web server.

```
cd web
npm init -y
npm install react react-dom -S
npm install react-scripts react-router@next -S
npm install xhr -S
json -I -f package.json -e 'this.scripts = { "start": "react-scripts start"}'
mkdir public
mkdir src
touch public/index.html
touch src/index.js
```

> We need two files to get started, one is the html file we will attach our app to.

# Edit index.html

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

# Edit index.js

```
const React = require('react')
const ReactDOM = require('react-dom')

const App = () => <h1>Hello, React</h1>

ReactDOM.render(<App />, document.getElementById('root'))

```

---

## Setup Git Repository

```
cd ..
```

> Remember to ignore node_modules

```
echo node_modules > .gitignore
```

> Commit and setup a remote repository

```
git add .
git commit -am "setup step"
git remote add origin [repo]
git push -u origin master
```

---

> Create a snapshot branch called setup, then go back into master

```
git checkout -b setup
git commit -am "setup branch"
git push origin setup
git checkout master
```

[Step 1](1) | [Menu](.)

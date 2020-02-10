const shell = require('shelljs')
const sh = shell.exec

sh(`mkdir -p dist`)
sh(`istyle modest > dist/style.css`)
sh(`ipress index.md > dist/index.html`)

const exercises = ['basic', 'arrays', 'strings', 'controlflow', 'datetime', 'drawing', 'filter', 'functions', 'map', 'math', 'objects', 'recursion', 'reduce2', 'regex']

exercises.forEach(section => {
  sh(`ipress ${section}/index.md > dist/${section}.html`)
})
console.log('complete!')

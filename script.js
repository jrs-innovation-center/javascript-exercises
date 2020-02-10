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

window.addEventListener('DOMContentLoaded', () => {
// invokes the runkit transformation for each element
  compose(map(transform), selectors)('.runkit')
})



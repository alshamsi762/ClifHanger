already# Front End Report
---
## Members:
### Anirudh Pal
### S S
### A M
---
## Code Block in Markdown
Brief description
```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```
---
## Server Stager:
A small python HTTP server is running on the CS Data. It should be used for testing your code. The person running the server needs to *git pull* to make changes appear on the browser. ThreeJS, Orbital Controls, Detector & STL Loader are already reference in the HTML and don't need to be added separately.

*Terminal Usage:*
```bash
python server.py [port]
```

*Browser Usage:*
```
data.cs.purdue.edu:[port]
```
---

## Testing with Jest

1. go into package.json
2. add the following piece of code.
```javascript
"scripts": {
  "test": "jest"
},
```
3. export the function or variables you want to test. (e.g)
```javascript
function sum(a, b) {
  return a + b;
}
var z = 12;
function mul(a,b){
	return a * b;
}
module.exports = {
	sum,
	mul,
	z
};
```
4. now create a file you want to use to write the testing script **filename.test.js**
```javascript
const VarName = require('path/to/file.js');
test('adds 1 + 2 to equal 3', () => {
  expect(VarName.sum(1, 2)).toBe(3);
});
test('multiplies 3 * 5 to equal 15',() =>{
	expect(VarName.mul(3,5)).toBe(15);
});
test('variable test to equal 12',() =>{
	expect(VarName.z).toBe(12);
});
```
5. $Terminal **npm test**
---

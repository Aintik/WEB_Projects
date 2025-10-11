let {kim,kim2,kim3} = require('./kim')
const a = require('./people/a')
const b = require('./people/b')
const c = require('./people/c')
const d = require('./people/d')
const e = require('./people/e')
const f = require('./people/f')
const g = require('./people/g')
const h = require('./people/h')


let matrix = [a,b,c,d,e,f,g,h,]
console.table(matrix)

// let state = !(matrix[1][0] &&
//     matrix[1 - 1][0] &&
//     matrix[1 - 1][0 - 1] &&
//     matrix[1][0 - 1] &&
//     matrix[1 + 1][0 - 1] &&
//     matrix[1 + 1][0] &&
//     matrix[1 + 1][0 + 1] &&
//     matrix[1][0 + 1] &&
//     matrix[1 - 1][0 + 1]);
// console.log(state);

kim3(matrix,1,6) 
// reduce, slice,splice
// let array = [
//     {
//         name: "John",
//         age: 13
//     },
//     {
//         name: "Anna",
//         age: 43
//     },
//     {
//         name: "John",
//         age: 18
//     },
//     {
//         name: "John",
//         age: 46
//     }
// ]

let array = ["hello", "Java", "script", "method", "splice", "of", "Arrays"]
// if you want to delete from the midle of array you cant use shift or pop so use splice
array.splice(1, 2, "google", "apple")     //['hello', 'google', 'apple', 'method', 'splice', 'of', 'Arrays']
// you can save deleted elements
let deleted = array.splice(3, 1)   // ['method']
// from index -1 (one step from the end)
array.splice(-1, 0, "1")       //['hello', 'google', 'apple', 'splice', 'of', '1', 'Arrays']


let array2 = ["t", "e", "s", "t"]
let slice = array2.slice(1, 3)  // e,s (copy from 1 to 3(not include))
let slice2 = array2.slice(-2)   // s,t (copy from -2 till the end)


let array3 = [1, 2, 3, 4, 5];
// The function is applied to all array elements one after another and “carries on” its result to the next call.
let result = array3.reduce((sum, current) => sum + current, 0); // result is 15
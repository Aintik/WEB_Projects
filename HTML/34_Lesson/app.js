
// console.log(document.getElementsByTagName("h1"));
// console.log(document.querySelector("h1"));
// let h1 = document.querySelector("h1")
// h1.innerHTML = "h1"

let btn = document.querySelector('button')
let input1 = document.querySelectorAll("input")[0]
let input2 = document.querySelectorAll("input")[1]
btn.addEventListener('click', () => { console.log(input1.value*1 + 1*input2.value);})


let l = 5.3 //meters
console.log(Math.round(l)+" meters");

let M = 4 //kg
console.log(Math.round(M/1000)+" tonn");

let a = 1000
let b = 5
console.log(a/b+" marta");

let ikxo = 43
console.log(Math.round(ikxo/10), 43%10);
console.log(Math.round(ikxo/10)+43%10);
console.log(Math.round(ikxo/10)*43%10);

let torxo = 2643
console.log(Math.floor((torxo%1000)/100)+" Yuzlar");

let sec = 9600
let min = sec / 60
let h = Math.floor(min/60)
min = min - h*60
console.log(h+" hours", min+" mins");
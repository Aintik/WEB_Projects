
let start = prompt("Entar the start number")
let fin = prompt("Entar the finish number")
let rem = 0
for (let o = start; o <= fin; o++){
    for (let i = 1; i <= o; i++) {
        if (o % i == 0)
            rem++
    }
    if (rem == 2) {
        console.log(o*1 + `  PRIME`);
        rem = 0
    } else {
        console.log(o*1 + `  NOT`);
        rem = 0
    }
}

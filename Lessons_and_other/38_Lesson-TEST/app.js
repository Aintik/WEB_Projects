// let n = 4
// let k = 114

// let data = (n+k-1) % 7
// if ( data == 0 ) console.log( 7 );
// else console.log(data);

// let son = 45
// let bir = Math.floor( son / 10 )
// let ikki = son - ( bir * 10 )

// console.log( bir + ikki, bir * ikki );
// console.log(ikki*10 + bir);

// let legs = 21

// legs % 4 == 0 ? console.log( legs / 2 ) : console.log( "error" )

// if ( legs % 4 == 0 ) console.log( legs / 2 );
// else console.log("error");

// let or = legs % 4 || legs / 2
// console.log(or);

// switch (legs%4) {
//     case 0:
//         console.log( legs / 2 );
//         break;
//     default:
//         console.log( "error" )
//         break;
// }


let num = 389
let abs = Math.abs( num )
let positive = num > 0 ? 'musbat' : 'manfiy'
let juft = abs % 2 == 0 ? 'juft' : 'tog'
let hona = ''
if ( abs >= 1000 ) hona = 'minglik'
    else if ( abs >= 100 ) hona = 'yuzlik'
        else if ( abs >= 10 ) hona = 'onlik'
            else if (abs >= 1) hona ='birlik'
            
let k = 0
for (let i = 1; i <= num; i++) {
    if(num%i == 0) k++
}
let tub = k == 2 ? 'tub' : 'tub emas'

let s200 = Math.floor(num / 200)
let r200 = num - s200 * 200
let s100 = Math.floor(r200 / 100)
let r100 = r200 - s100 * 100
let s50 = Math.floor(r100 / 50)
let r50 = r100 - s50 * 50
let s20 = Math.floor(r50 / 20)
let r20 = r50 - s20 * 20
let s10 = Math.floor(r20 / 10)
let r10 = r20 - s10 * 10
let s5 = Math.floor( r10 / 5)
let s1 = r10 - s5 * 5

console.log(num + '', positive, juft, hona, tub + '\n', `${s200} of 200\n`, `${s100} of 100\n`, `${s50} of 50\n`, `${s20} of 20\n`, `${s10} of 10\n`, `${s5} of 5\n`, `${s1} of 1`);

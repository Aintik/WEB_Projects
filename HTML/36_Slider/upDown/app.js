let carusel = document.querySelector(".carusel")
let amount = carusel.childElementCount
carusel.style.height = `${100 * amount}%`
let i = 1
let last = document.querySelector(".last")
last.style.height = `${100 * amount}%`
let k = amount - 1
last.style.transform = `translateY( -${100/amount*k}% )`



function up() {
    if (i < amount) {
        carusel.style.transform = `translateY( -${100 / amount * i}% )`
        i++
    } else {
        i = 0;
        carusel.style.transform = `translateY( -${100 / amount * i}% )`
        i++
    }
    
    if (k > 0) {
        k--
        last.style.transform = `translateY( -${100 / amount * k}% )`
    } else {
        k = amount - 1
        last.style.transform = `translateY( -${100 / amount * k}% )`
    }
}
function down() {
    if (i > 1) {
        i--
        carusel.style.transform = `translateY( -${100 / amount * (i - 1)}% )`
    } else {
        i = amount - 1;
        carusel.style.transform = `translateY( -${100 / amount * i}% )`
        i++
    }

    if (k < amount - 1) {
        k++
        last.style.transform = `translateY( -${100 / amount * k}% )`
    } else {
        k = 0
        last.style.transform = `translateY( -${100 / amount * k}% )`
    }
}
document.addEventListener('keyup', function (event) {
    if (event.key == 'ArrowUp') up()
    if (event.key == 'ArrowDown') down()
});
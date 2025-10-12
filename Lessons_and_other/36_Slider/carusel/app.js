let carusel = document.querySelector(".corusel")
let count = carusel.childElementCount
let i = 1
carusel.style.width = `${100 * count}%`

let group = document.querySelector('.btn div')
for (let j = 0; j < count; j++) {
    let point = document.createElement('div')
    point.classList.add('round')
    group.append(point)
}
let points = document.querySelectorAll('.round')



function color() {
    points.forEach(element => element.style.background = 'gray')
    points[i - 1].style.background = 'black'
}
color()
function right() {
    if (i < count) {
        carusel.style.transform = 'translateX(' + '-' + 100 / count * i + '%)'
        i++
    } else {
        i = 0;
        carusel.style.transform = 'translateX(' + '-' + 100 / count * i + '%)'
        i++
    }
    color()
}
function left() {
    if (i <= count && i > 1) {
        i--
        carusel.style.transform = 'translateX(' + '-' + 100 / count * (i - 1) + '%)'
    } else {
        i = 3;
        carusel.style.transform = 'translateX(' + '-' + 100 / count * i + '%)'
        i++
    }
    color()
}
// setInterval(left, 1000)
// setTimeout(left, 1000)


document.addEventListener('keyup', function (event) {
    if (event.key == 'ArrowLeft') left()
    if(event.key == 'ArrowRight') right()
});
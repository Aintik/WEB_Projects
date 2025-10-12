let menu = document.querySelector('.menu')
let ul = document.querySelector('ul')
let li1 = document.querySelector('ol li:first-child')
let li2 = document.querySelector('ol li:nth-child(2)')
let li3 = document.querySelector('ol li:last-child')
let flag = false


function doit(e) {
    if (!flag) {
        // console.log("click");
        menu.style.left = 0
        ul.style.position = 'static'
        li1.style = "transform: rotate(45deg); position: relative; bottom: -20px; "
        li2.style.display = "none"
        li3.style = "transform: rotate(-45deg); position: relative; bottom: 10px; "
        flag = true
    } else {
        // console.log('open');
        menu.style.left = '-100%';
        // ul.style.position = 'absolute'
        ul.style.left = '-100%';
        li1.style = "transform: rotate(360deg); position: static; "
        li2.style.display = "block"
        li3.style = "transform: rotate(360deg); position: static; "
        flag = false
    }
}
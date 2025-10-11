let btn = document.querySelector('button')
let input = document.querySelector('input')
let ul = document.querySelector('ul')
let trash = document.querySelectorAll("i")


btn.addEventListener("click", adding);
for (let i = 0; i < trash.length; i++) {
    trash[i].addEventListener('click', function () { del(i) })
}


function adding() {
    if (input.value == "") {
        alert('Write smth')
    } else {
        let li = document.createElement('li')
        li.innerHTML = `<p>${input.value}</p> <i class="fa-solid fa-trash-can"></i>`
        ul.appendChild(li)
        input.value = ""
    }


    trash = document.querySelectorAll("i")
    for (let i = 0; i < trash.length; i++) {
        trash[i].addEventListener('click', function () { del(i) })
    }
}
function del(i) {
    let pos = trash[i].closest('li')
    pos.remove()
}
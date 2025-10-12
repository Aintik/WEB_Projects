const menu = document.querySelector(".menu_body");
const menuBtn = document.querySelector(".icon");
const body = document.body

if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("active");
        menuBtn.classList.toggle("active");
        body.classList.toggle("lock");
    })

    menu.addEventListener("click", e => { 
        if (e.target.classList.contains("menu_body")) {
            menu.classList.remove("active");
            menuBtn.classList.remove("active");
            body.classList.remove("lock");
        }
    })

    menu.querySelectorAll('.link').forEach(link => {
        link.addEventListener("click", () => { 
            menu.classList.remove("active");
            menuBtn.classList.remove("active");
            body.classList.remove("lock");
        });
    })
}

/* ------------------------------------------------------ */

const anchors = document.querySelectorAll('a[href *= "#"]')
anchors.forEach(anchor => {
    anchor.addEventListener("click", event => { 
        event.preventDefault();

        const blockID = anchor.getAttribute('href').substring(1);
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    })
})
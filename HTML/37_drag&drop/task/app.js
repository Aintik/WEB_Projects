let places = document.querySelectorAll('.place')
let texts = document.querySelectorAll( '.text' )
let input = document.querySelector( 'input' )
let addedPlace = document.querySelector( '.added' )
let trash = document.querySelector('.bin')
let dropped
let here = document.createElement('div')
here.classList.add( 'here' )

for(text of texts){
    text.addEventListener('dragstart', start)
    text.addEventListener('dragend', end)
}
for ( item of places )
{

    item.addEventListener( 'dragover', ( e ) =>
    {
        e.preventDefault()
    } )
    item.addEventListener( 'dragenter', ( e ) =>
    {
        e.target.closest( '.place' ).append( here )
    } )
    item.addEventListener( 'dragleave', ( e ) =>
    {
        // here.remove()    
    })
    item.addEventListener('drop', (e) => { 
        e.target.closest( '.place' ).append( dropped )
        here.remove()
    })
}

trash.addEventListener( 'dragover', ( e ) =>
{
    e.preventDefault()
})
trash.addEventListener( 'drop', ( e ) =>
{
    dropped.remove()
})


function start(){
    setTimeout( () =>
    {
        this.style.display = 'none'
        dropped = this
        this.closest( '.place' ).append( here )
    }, 0 )
}
function end(){
    setTimeout( () => this.style.display = 'block', 0 )
    here.remove()
}
function add(){
    if (input.value != "") {
        let selected = document.createElement("div");
        selected.className = "text"
        selected.draggable = "true"
        selected.innerHTML = `<h3>${ input.value }</h3>`
        addedPlace.append( selected )
        input.value = ''
        selected.addEventListener( 'dragstart', start )
        selected.addEventListener( 'dragend', end )
    }
}
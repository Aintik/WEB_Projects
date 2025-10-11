let places = document.querySelectorAll( '.place' )
let item = document.querySelector( '.item' )

item.addEventListener( 'dragstart', start )
item.addEventListener( 'dragend', end )

for ( onePlace of places )
{
    onePlace.addEventListener( 'dragover', (e) =>
    {
        console.log( 'over' );
        e.preventDefault()
    } )
    onePlace.addEventListener( 'dragenter', () =>
    {
        console.log('enter');
    } )
    onePlace.addEventListener( 'dragleave', () =>
    {
        console.log( 'leave' );
    } )
    onePlace.addEventListener( 'drop', (e) =>
    {
        console.log( 'drop' );
        e.target.append(item)
    })
}



function start(e){
    console.log( 'start' );
    setTimeout( () =>e.target.style.display = 'none', 0)
}
function end(e){
    setTimeout(e.target.style.display = 'block',0)
    console.log( 'end' );
}

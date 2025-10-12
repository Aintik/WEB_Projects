let
  canv = document.getElementById('canvas'),
  ctx = canv.getContext('2d'); //context

canv.width = window.innerWidth;
canv.height = window.innerHeight;

//Code
//ctx.fillStyle = 'magenta'; //color

/*
let x = 50;
ctx.fillRect(x, 50, 200, 300) // 50 50 cords, widht haight
ctx.lineWidth = 10; // width of border
ctx.strokeRect(x, 50, 200, 300); //border
*/

/*
setInterval(() => {
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canv.width, canv.height) //clear
  ctx.fillStyle = 'magenta'; //color
  ctx.fillRect(x++, 50, 200, 300)
}, 10);
*/

//ctx.arc(canv.width/2, canv.height/2, 100, 0, Math.PI, true ) //cords of center, radius, startAngle, endAngle, clockwise?
//ctx.fill();

//ctx.scale(2, 2)
//ctx.rotate(.1)

//ctx.beginPath();
//ctx.moveTo(50, 50);
//ctx.lineTo(25, 100);
//ctx.lineTo(75, 100);
//ctx.closePath();
//ctx.stroke();

//let gradient = ctx.createLinearGradient(0, 0, 500, 0); //cords Start, cords End
//gradient.addColorStop('.0', 'magenta'); // precent, color
//gradient.addColorStop('.50', 'blue'); // precent, color
//gradient.addColorStop('.100', 'red'); // precent, color
//ctx.fillStyle = gradient;

//ctx.font = 'bold 20px Georgia';
//ctx.fillText('Hello World', 50, 50)


//App
let cords = [];
let isMouseDown = false;
canv.addEventListener('mousedown', () => isMouseDown = true);
canv.addEventListener('mouseup', () => { isMouseDown = false; ctx.beginPath();  cords.push('mouseup'); });

//ctx.fillStyle = 'blue'
ctx.lineWidth = 10 * 2;
canv.addEventListener('mousemove', function (e) {
  if (isMouseDown) {
    cords.push([e.clientX, e.clientY]);

    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(e.clientX, e.clientY, 10, 0, Math.PI*2);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  }
})

function replay() {
  let timer = setInterval(() => {
    if (!cords?.length) {
      clearInterval(timer);
      ctx.beginPath();
      return;
    }
    let crd = cords.shift()
    let e = {
        clientX: crd['0'],
        clientY: crd['1']
      };
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(e.clientX, e.clientY, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  }, 20);
}
function save() {
  localStorage.setItem('cords', JSON.stringify(cords));
}
function clear() {
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, canv.width, canv.height);
  ctx.beginPath();
  ctx.fillStyle = '#000';
}
document.addEventListener('keydown', function (e) { 
  if (e.keyCode == 83) {  //Save
    save();
    console.log('Saved');
  } 
  if (e.keyCode == 82) {  //Replay
    console.log('Replayin...');
    cords = JSON.parse(localStorage.getItem('cords'));
    clear();
    replay();
  }
  if (e.keyCode == 67) {  //Clear
    clear();
    console.log('Cleared');
  }
})









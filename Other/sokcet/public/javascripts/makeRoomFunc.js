
//module.exports =
function makeRoom(channel) {
  const socket = io();

  const btnJoin = document.getElementById('btnJoin');
  const btnClear = document.getElementById('btnClear');
  const btn = document.getElementById('btn');
  const inp = document.getElementById('inp');
  const mainList = document.getElementById('main');
  const inpName = document.getElementById('name');
  const textNik = document.getElementById('nik');
  const logs = document.getElementById('logs');
  const btnHome = document.getElementById('home');
  let nik = '';

  function warn(text) {
    const lo = document.createElement('p');
    lo.innerText = text;
    logs.appendChild(lo);
  }
  btnHome.onclick = () => {
    socket.emit('disconnected', {nik, channel})
  }
  btnClear.onclick = () => {
    mainList.innerHTML = '';
    warn('Cleared')
  }
  window.onload = () => { 
    if (localStorage.getItem('name')) {
      nik = localStorage.getItem('name');
      socket.emit('ch', { channel, nik, InLocal: true });
      textNik.innerText = `Your name's ${nik}`;
    }
  }
  btnJoin.onclick = () => {
    nik = inpName.value;
    if (nik.trim() == '') {
      warn('Enter your name');
      return;
    }
    localStorage.setItem('name', nik);
    inpName.value = '';
    socket.emit('ch', { channel, nik });
    textNik.innerText = `Your name's ${nik}`;
  }

  socket.on('connected', data => {
    if (data.joined === false) {
      warn(`${data.name} was not joined, name is alrady taken`)
      return;
    }
    warn(data.name + ' was joined')
  })

  btn.addEventListener("click", (e) => {
    if (inp.value.trim() == '') {
      warn('Please type message');
      return;
    } else if (nik.trim() == '') {
      warn('Plese indicate your name')
      return;
    }
    socket.emit("alo", { title: inp.value, channel, nik })

    const myLi = document.createElement("li");
    myLi.classList.add("mine")
    myLi.innerText = inp.value;
    mainList.appendChild(myLi);
    inp.value = "";
  })

  socket.on("reply", (data) => {
    const li = document.createElement("li");
    li.innerHTML = `<b>${data.nik}:</b> ${data.message}`;
    mainList.appendChild(li)
  })
}

document.addEventListener('keydown', changeDirection);
setInterval(loop, 1000 / 60) //60 fps

let
  canv = document.getElementById("mc"), // canvas
  scoreText = document.getElementById("score"),
  ctx = canv.getContext('2d'),  //2d context
  gs = fkp = false, // game started && first key pressed
  speed = baseSpeed = 3,
  xv = yv = 0, //velocity (x & y)
  px = ~~(canv.width) / 2, //position x
  py = ~~(canv.height) / 2, //position y
  pw = ph = 20, // player size
  aw = ah = 20, //apples size
  apples = [], //apples list
  trail = [], //tail list
  tail = 100, //teil size (1 for 10)
  tailSafeZone = 20,
  cooldown = false, //key is in cooldown mode
  score = 0; //current score

//Game main loop
function loop() {
  //logic
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canv.clientWidth, canv.height);

  //force speed
  px += xv;
  py += yv;

  //teleports
  if (px > canv.width) { px = 0 }
  if (px + pw < 0) { px = canv.width }
  if (py + ph < 0) { py = canv.height }
  if (py > canv.height) { py = 0 }

  //paint the snake
  ctx.fillStyle = 'lime';
  for (let i = 0; i < trail.length; i++) {
    ctx.fillStyle = trail[i].color || 'lime';
    ctx.fillRect(trail[i].x, trail[i].y, pw, ph);
  }

  trail.push({
    x: px,
    y: py,
    color: ctx.fillStyle
  })

  //limiter
  if (trail.length > tail) {
    trail.shift();
  }
  //eaten
  if (trail.length > tail) {
    trail.shift();
  }

  //self collisions
  if (trail.length >= tail && gs) {
    for (let i = trail.length - tailSafeZone; i >= 0; i--) {
      if (px < (trail[i].x + pw) && px + pw > trail[i].x && py < (trail[i].y + ph) && py + ph > trail[i].y) {
        //got collision
        tail = 15; //cut the tail
        speed = baseSpeed; //cut the speed
        score = 0;
        showScore();

        for (let t = 0; t < trail.length; t++) {
          //highlight losed area
          trail[t].color = 'red';
          if (t >= trail.length - tail) {
            break;
          }
        }
      }
    }

  }
  //paint apples
  for (let a = 0; a < apples.length; a++) {
    ctx.fillStyle = apples[a].color;
    ctx.fillRect(apples[a].x, apples[a].y, aw, ah)
  }

  //check for snake head collision with apples
  for (let a = 0; a < apples.length; a++) {
    if (px < (apples[a].x + pw) && px + pw > apples[a].x && py < (apples[a].y + ph) && py + ph > apples[a].y) {
      //got a collision with apple
      apples.splice(a, 1); //remove this apple from the list
      tail += 10;
      speed += .1;
      score += 1;
      showScore();
      spawnApple();
      break;
    }
  }
}

//spawner of apples
function spawnApple() {
  let newApple = {
    x: ~~(Math.random() * canv.width),
    y: ~~(Math.random() * canv.height),
    color: 'red'
  }
  //forbid to spawn near edges
  if ((newApple.x < aw || newApple.x > canv.width - aw) || (newApple.y < ah || newApple.y > canv.height - ah)) {
    spawnApple();
    return;
  }

  //check for collisions with tail element, so no spawn of apple in it
  for (let i = 0; i < tail.length; i++) {
    if (newApple.x < (trail[i].x + pw) && newApple.x + pw > trail[i].x && newApple.y < (trail[i].y + ph) && newApple.y + ph > trail[i].y) {
      //got a collision
      spawnApple();
      return;
    }
  }

  apples.push(newApple);

  if (apples.length < 3 && ~~(Math.random() * 1000) > 500) {
    //30% chance to spawn one more apple
    spawnApple();
  }
}

//random color generator
function rc() {
  return '#' +
    ((~~(Math.random() * 255)).toString(16)) +
    ((~~(Math.random() * 255)).toString(16)) +
    ((~~(Math.random() * 255)).toString(16))
}

// velocity changer
async function changeDirection(e) {
  if (!fkp && [37, 38, 39, 40].indexOf(e.keyCode) > -1) {
    setTimeout(() => {
      gs = true;
    }, 1000)
    fkp = true;
    spawnApple();
  }
  if (cooldown) {
    return false;
  }
  if (e.keyCode == 37 && !(xv > 0)) { //left arrow
    xv = -speed;
    yv = 0;
  }
  if (e.keyCode == 38 && !(yv > 0)) { //top arrow
    xv = 0;
    yv = -speed;
  }
  if (e.keyCode == 39 && !(xv < 0)) { //right arrow
    xv = speed;
    yv = 0;
  }
  if (e.keyCode == 40 && !(yv < 0)) { //down arrow
    xv = 0;
    yv = speed;
  }
  cooldown = true;
  setTimeout(() => {
    cooldown = false;
  }, 100)
}
function showScore() {
  scoreText.innerText = score
}

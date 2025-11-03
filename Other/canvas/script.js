let canv = document.getElementById("canvas"),
  ctx = canv.getContext("2d"),
  saveBtn = document.getElementById("saveBtn"),
  replayBtn = document.getElementById("replayBtn"),
  clearBtn = document.getElementById("clearBtn");

// Drawing state
let cords = [];
let isDrawing = false;

// Set canvas size to match window
function resizeCanvas() {
  canv.width = window.innerWidth;
  canv.height = window.innerHeight;
  clear();
}

// Initialize canvas
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Mouse events
canv.addEventListener("mousedown", startDrawing);
canv.addEventListener("mousemove", draw);
canv.addEventListener("mouseup", stopDrawing);
canv.addEventListener("mouseout", stopDrawing);

// Touch events for mobile
canv.addEventListener("touchstart", handleTouchStart, { passive: false });
canv.addEventListener("touchmove", handleTouchMove, { passive: false });
canv.addEventListener("touchend", handleTouchEnd);

// Button events
//saveBtn.addEventListener("click", save);
//replayBtn.addEventListener("click", replay);
clearBtn.addEventListener("click", clear);

// Keyboard shortcuts
document.addEventListener("keydown", function (e) {
  if (e.keyCode == 83 || e.key === "s") {
    // Save
    save();
    console.log("Saved");
  }
  if (e.keyCode == 82 || e.key === "r") {
    // Replay
    console.log("Replaying...");
    cords = JSON.parse(localStorage.getItem("cords")) || [];
    clear();
    replay();
  }
  if (e.keyCode == 67 || e.key === "c") {
    // Clear
    clear();
    console.log("Cleared");
  }
});

// Drawing functions
function startDrawing(e) {
  isDrawing = true;
  const point = getPoint(e);
  cords.push(["start", point.x, point.y]);

  ctx.beginPath();
  ctx.moveTo(point.x, point.y);

  // Draw initial circle
  ctx.beginPath();
  ctx.arc(point.x, point.y, 10, 0, Math.PI * 2);
  ctx.fill();
}

function draw(e) {
  if (!isDrawing) return;

  const point = getPoint(e);
  cords.push([point.x, point.y]);

  ctx.lineTo(point.x, point.y);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(point.x, point.y, 10, 0, Math.PI * 2);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(point.x, point.y);
}

function stopDrawing() {
  if (isDrawing) {
    isDrawing = false;
    ctx.beginPath();
    cords.push("mouseup");
  }
}

// Touch event handlers
function handleTouchStart(e) {
  e.preventDefault();
  const touch = e.touches[0];
  const mouseEvent = new MouseEvent("mousedown", {
    clientX: touch.clientX,
    clientY: touch.clientY,
  });
  canv.dispatchEvent(mouseEvent);
}

function handleTouchMove(e) {
  e.preventDefault();
  const touch = e.touches[0];
  const mouseEvent = new MouseEvent("mousemove", {
    clientX: touch.clientX,
    clientY: touch.clientY,
  });
  canv.dispatchEvent(mouseEvent);
}

function handleTouchEnd(e) {
  e.preventDefault();
  const mouseEvent = new MouseEvent("mouseup", {});
  canv.dispatchEvent(mouseEvent);
}

// Helper function to get coordinates from event
function getPoint(e) {
  const rect = canv.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  };
}

// App functions
function replay() {
  if (!cords.length) return;

  clear();
  let i = 0;

  function drawNext() {
    if (i >= cords.length) {
      ctx.beginPath();
      return;
    }

    const crd = cords[i];

    if (crd === "mouseup") {
      ctx.beginPath();
    } else if (Array.isArray(crd) && crd[0] === "start") {
      ctx.beginPath();
      ctx.moveTo(crd[1], crd[2]);

      // Draw initial circle
      ctx.beginPath();
      ctx.arc(crd[1], crd[2], 10, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(crd[1], crd[2]);
    } else {
      ctx.lineTo(crd[0], crd[1]);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(crd[0], crd[1], 10, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(crd[0], crd[1]);
    }

    i++;
    setTimeout(drawNext, 10);
  }

  drawNext();
}

function save() {
  localStorage.setItem("cords", JSON.stringify(cords));
}

function clear() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canv.width, canv.height);
  ctx.beginPath();
  ctx.fillStyle = "black";
  cords = [];
}

// Initialize drawing settings
ctx.fillStyle = "black";
ctx.strokeStyle = "black";
ctx.lineWidth = 10 * 2;
ctx.lineCap = "round";
ctx.lineJoin = "round";

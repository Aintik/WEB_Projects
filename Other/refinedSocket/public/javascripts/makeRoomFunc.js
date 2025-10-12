const socket = io();
const form = document.getElementById("chatForm");
const input = document.getElementById("msg");
const messages = document.getElementById("main");
const logs = document.getElementById("logs");


socket.emit("joinRoom", ROOM_ID);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value.trim()) {
    socket.emit("chatMessage", { room: ROOM_ID, msg: input.value });
    addMessage(input.value, "mine");
    input.value = "";
  }
});
// remove any previous listeners to prevent duplicates
socket.off('chatMessage');

socket.on("chatMessage", ({ msg, sender }) => {
  const type = sender === "me" ? "mine" : "other";
  addMessage(msg, type);
});

function addMessage(text, type) {
  const li = document.createElement("li");
  li.textContent = text;
  li.classList.add(type);
  messages.appendChild(li);
  messages.scrollTop = messages.scrollHeight;  
}

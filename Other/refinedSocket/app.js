const express = require("express");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");
const createError = require("http-errors");

const indexRouter = require("./routes/index");

const app = express();
const server = http.createServer(app);
const io = new Server(server);
let deisconnect;

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(express.static(path.join(__dirname, "public")));
app.use("/", indexRouter);

// --- SOCKET.IO LOGIC ---
io.on("connection", (socket) => {

  socket.on("joinRoom", (room) => {
    socket.join(room);
  });

  socket.on("chatMessage", ({ room, msg }) => {
    // broadcast to everyone except sender
    socket.to(room).emit("chatMessage", { msg, sender: "other" });

    // send back to sender as 'mine'
    //socket.emit("chatMessage", { msg, sender: "me" });
  });

  socket.on("disconnect", () => deisconnect ="Client disconnected");
});

// Error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

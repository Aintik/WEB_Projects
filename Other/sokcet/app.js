const createError = require("http-errors");
const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const server = require("http").createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
//const io = require("socket.io")(server);

let yourapp_date = new Date().toLocaleDateString();
let membersList = {
  'room1': [],
  'room2': [],
  'room3': [],
  'room4': [],
  'room5': [],
  };
io.on("connection", (socket) => {
  console.log("a user connected");
  
  socket.on('ch', data => {
    console.log(data.InLocal);
    if (data.InLocal) {
      socket.join(data.channel);
      socket.to(data.channel).emit('connected', { name: data.nik });
    } else if (membersList[data.channel]?.find(item => item == data.nik)) {
      socket.emit('connected', { name: data.nik, joined: false });
    } else {
      membersList[data.channel]?.push(data.nik);
      socket.join(data.channel);
      socket.to(data.channel).emit('connected', { name: data.nik });
    }

  })

  socket.on('disconnected', data => {
    const i = membersList[data.channel]?.indexOf(data.nik);
    membersList[data.channel]?.splice(i, 1)
  })

  socket.on("alo", data => {
    socket.to(data.channel).emit("reply", {
      message: data.title,
      nik: data.nik
    })
  })

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

function hasOneDayPassed(){
  // get today's date. eg: "7/37/2007"
  let date = new Date().toLocaleDateString();

  // if there's a date in localstorage and it's equal to the above: 
  // inferring a day has yet to pass since both dates are equal.
  if (yourapp_date == date)
    return false;

  // this portion of logic occurs when a day has passed
  yourapp_date = date;
  return true;
}
if (hasOneDayPassed()) {
  membersList = {
    'room1': [],
    'room2': [],
    'room3': [],
    'room4': [],
    'room5': []
  };
}


const indexRouter = require("./routes/index");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

server.listen(process.env.PORT || 3000);

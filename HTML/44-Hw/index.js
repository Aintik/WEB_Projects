const express = require("express");
const app = express();
const path = require("path");
const teachers = require("./teachers");

//Requiring HANDLEBARS
const { engine } = require("express-handlebars");
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
//public
app.use(express.static(path.join(__dirname, "public")));

//Filtering arrays
let eng = teachers.filter((item) => item.course_name == "General English");
let ielts = teachers.filter((item) => item.course_name == "IELTS");
let less = teachers.filter((item) => item.price <= 50000);

app.get("/", (req, res) => {
  res.send("this local server");
});
app.get("/index", (req, res) => {
  res.render("index.hbs", { title: "main" });
});
app.get("/eng", (req, res) => {
  res.render("general_eng.hbs", { title: "general_eng", eng });
});
app.get("/ielts", (req, res) => {
  res.render("ielts.hbs", { title: "IELTS", ielts });
});
app.get("/budget", (req, res) => {
  res.render("budget.hbs", { title: "less 50.000 sums", less });
});

app.listen(3000, () => console.log("3000 port opened"));
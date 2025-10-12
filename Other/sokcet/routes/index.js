const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
  res.render("index", { title: "Express" });
});
router.get("/room1", (req, res) => {
  res.render("Rooms/room1");
});
router.get("/room2", (req, res) => {
  res.render("Rooms/room2");
});
router.get("/room3", (req, res) => {
  res.render("Rooms/room3");
});
router.get("/room4", (req, res) => {
  res.render("Rooms/room4");
});
router.get("/room5", (req, res) => {
  res.render("Rooms/room5");
});

module.exports = router;

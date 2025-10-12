const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", {
    title: "Socket Rooms",
    rooms: [1, 2, 3, 4, 5],
  });
});

router.get("/room/:id", (req, res) => {
  const roomId = req.params.id;
  res.render("room", { title: `Room ${roomId}`, roomId });
});

module.exports = router;

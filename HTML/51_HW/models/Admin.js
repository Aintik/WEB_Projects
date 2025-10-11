const { Schema, model } = require("mongoose");

const AdminSchema = new Schema({
  first: String,
  last: String,
  email: String,
  password: String,
});

module.exports = model("Admin", AdminSchema);

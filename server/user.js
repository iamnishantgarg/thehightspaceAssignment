const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: String,
  age: { type: Number, min: 1 },
  sex: { type: String },
  addresses: [],
});
module.exports = mongoose.model("user", userSchema);

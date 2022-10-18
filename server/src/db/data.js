const { Schema, model } = require("./connection"); // import Schema & model

// Favourites Schema
const DataSchema = new Schema({
  username: { type: String, required: true },
  favourites: [{ type: String }],
  groceries: [{ type: String }],
});

// Favourites model
const Data = model("Data", DataSchema);

module.exports = Data;

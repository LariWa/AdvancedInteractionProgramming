const { Schema, model } = require("./connection"); // import Schema & model

// Data Schema
const DataSchema = new Schema({
  username: { type: String, required: true },
  favourites: [{ type: String }],
  groceries: [{ type: String }],
});

// Data model
const Data = model("Data", DataSchema);

module.exports = Data;

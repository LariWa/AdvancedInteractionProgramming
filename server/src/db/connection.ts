const mongoose = require("mongoose"); //import fresh mongoose object

//DESTRUCTURE ENV VARIABLES
const uri =
  "mongodb+srv://admin:mealApp@cluster0.w6inavl.mongodb.net/?retryWrites=true&w=majority";
// CONNECT TO MONGO
mongoose.connect = mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// CONNECTION EVENTS
mongoose.connection
  .on("open", () => console.log("DATABASE STATE", "Connection Open"))
  .on("close", () => console.log("DATABASE STATE", "Connection Open"))
  .on("error", (error) => console.log("DATABASE STATE", error));

// EXPORT CONNECTION
module.exports = mongoose;

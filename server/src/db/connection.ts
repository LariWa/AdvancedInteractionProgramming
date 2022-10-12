const mongoose = require("mongoose"); //import fresh mongoose object
import key from "/etc/secrets/DBKey";

//DESTRUCTURE ENV VARIABLES
const uri =
  "mongodb+srv://admin:" +
  key +
  "@cluster0.w6inavl.mongodb.net/?retryWrites=true&w=majority";
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

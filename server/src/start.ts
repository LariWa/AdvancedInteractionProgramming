import express, { Application } from "express";
import https from "https";
import cors from "cors";
import UserRouter from "./db/UserController"; //import User Routes
import DataRouter from "./db/DataController"; //import Data Routes
import fs from "fs";
const api = require("./api");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);
// const options = {
//   key: fs.readFileSync("./cert/localhost-key.pem"),
//   cert: fs.readFileSync("./cert/localhost.pem"),
// };
app.use("/api", api);
app.use("/user", UserRouter);
app.use("/db", DataRouter);

// const server = https.createServer(options, app);
app.listen(port, () => {
  console.log("Server is listening on port:" + port);
});

import express, { Application } from "express";
import path from "path";
import https from "https";
import fs from "fs";
import cors from "cors";
import UserRouter from "./db/UserController"; //import User Routes
import DataRouter from "./db/DataController"; //import Data Routes

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

const server = https.createServer(app);
server.listen(port, () => {
  console.log("Server is listening on port:" + port);
});

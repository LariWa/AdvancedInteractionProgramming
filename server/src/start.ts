import express, { Application } from "express";
import path from "path";
import https from "https";
import fs from "fs";
import cors from "cors";
const api = require("./api");
const app = express();
const port = process.env.PORT || 8080;
const options = {
  key: fs.readFileSync("./cert/localhost-key.pem"),
  cert: fs.readFileSync("./cert/localhost.pem"),
};

app.use(express.json());
app.use(express.static(path.join(__dirname, "../../dist")));
app.use(cors({ credentials: true, origin: "http://localhost:19007" }));
app.get("/", (req: express.Request, res: express.Response) => {
  const htmlFile = path.join(__dirname, "../../dist/index.html");
  res.status(200).send(htmlFile);
});
app.use("/api", api);

const server = https.createServer(options, app);
server.listen(port, () => {
  console.log("Server is listening on port:" + port);
});
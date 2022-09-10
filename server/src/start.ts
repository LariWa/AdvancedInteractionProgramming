import express, {Application} from "express";
import path from "path";
import http from "http";
const app =  express();

const port = process.env.PORT || 8080;
const router = express.Router;

app.use(express.json());
app.use(express.static(path.join(__dirname, "../../dist")));

app.get("/", (req: express.Request, res: express.Response) => {
    const htmlFile = path.join(__dirname, "../../dist/index.html")
    res.status(200).send(htmlFile);
})

const server = http.createServer( app);
server.listen(port, () =>{
    console.log("Server is listening on port:"+port);
})
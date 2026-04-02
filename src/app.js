import express from "express";
import { engine } from "express-handlebars";
import indexRouter from "./router/index.router.js";
import path from "path";
import { fileURLToPath } from 'url';
import cors from "cors";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(cors({
    "credentials": false
}));
app.engine("handlebars", engine({
    defaultLayout: "main",
    extname: ".handlebars",
    helpers: {
        eq: (a, b) => a === b
    }
}));
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, 'views/'));
app.use(express.json());
app.use(express.static(__dirname + "../../" + "/public"));
app.use("/", indexRouter);

export default app;
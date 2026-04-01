import express from "express";
import { engine } from "express-handlebars";
import indexRouter from "./router/index.router.js";
import path from "path";
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, 'views/'));
app.use(express.json());
app.use(express.static("public"));
app.use("/", indexRouter);

export default app;
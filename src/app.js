import express from "express";
import indexRouter from "./router/index.router.js";
const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use("/", indexRouter);

export default app;
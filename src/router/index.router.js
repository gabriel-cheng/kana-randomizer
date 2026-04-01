import { Router } from "express";
import IndexController from "../controllers/index.controllers.js";

const indexRouter = Router();
const indexController = new IndexController();

indexRouter.get("/", indexController.index);
indexRouter.get("/hiragana", indexController.hiragana);
indexRouter.get("/katakana", indexController.katakana);

export default indexRouter;
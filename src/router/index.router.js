import { Router } from "express";
import IndexController from "../controllers/index.controllers.js";

const indexRouter = Router();
const indexController = new IndexController();

indexRouter.get("/", indexController.index);
indexRouter.post("/random", indexController.getRandomCharactersList);

export default indexRouter;
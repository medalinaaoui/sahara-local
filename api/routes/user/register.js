import express from "express";
import registerController from "../../controllers/registerController.js";

const registerRouter = express.Router();
registerRouter.get("/register", registerController);

export default registerRouter;

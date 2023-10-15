import express from "express";
import loginController from "../../controllers/loginController.js";

const loginRouter = express.Router();
loginRouter.post("/", loginController);

export default loginRouter;

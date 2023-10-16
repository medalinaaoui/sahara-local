import express from "express";
import signinWithGoogleController from "../../controllers/signinWithGoogleController.js";

const loginRouter = express.Router();
loginRouter.post("/", signinWithGoogleController);

export default loginRouter;

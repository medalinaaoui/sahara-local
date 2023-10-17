import express from "express";
import updateUserInfosController from "../../controllers/updateUserInfosController.js";
import verifyAccess from "../../utils/verifyAccess.js";
const userInfosRouter = express.Router();

userInfosRouter.post("/:id", verifyAccess, updateUserInfosController);

export default userInfosRouter;

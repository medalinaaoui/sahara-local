import express from "express";
import updateUserInfosController from "../../controllers/updateUserInfosController.js";
import deleteUserController from "../../controllers/deleteUserController.js";
import verifyAccess from "../../utils/verifyAccess.js";
const userInfosRouter = express.Router();

userInfosRouter.post("/:id", verifyAccess, updateUserInfosController);
userInfosRouter.delete("/:id", verifyAccess, deleteUserController);

export default userInfosRouter;

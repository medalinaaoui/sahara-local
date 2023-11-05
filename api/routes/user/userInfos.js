import express from "express";
import updateUserInfosController from "../../controllers/updateUserInfosController.js";
import deleteUserController from "../../controllers/deleteUserController.js";
import logoutController from "../../controllers/logoutController.js";
import languageController from "../../controllers/languageController.js";
import verifyAccess from "../../utils/verifyAccess.js";
const userInfosRouter = express.Router();

userInfosRouter.post("/:id", verifyAccess, updateUserInfosController);
userInfosRouter.get("/logout", verifyAccess, logoutController);
userInfosRouter.delete("/:id", verifyAccess, deleteUserController);
userInfosRouter.post(
  "/perfered/language/:id",
  verifyAccess,
  languageController
);

export default userInfosRouter;

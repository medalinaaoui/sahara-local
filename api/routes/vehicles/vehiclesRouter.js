import express from "express";
import includeVehicleController from "../../controllers/includeVehicleController.js";
import vehiclesListController from "../../controllers/vehiclesListController.js";
import verifyAccess from "../../utils/verifyAccess.js";
const vehiclesRouter = express.Router();

vehiclesRouter
  .post("/include", verifyAccess, includeVehicleController)
  .get("/list/:id", verifyAccess, vehiclesListController);

export default vehiclesRouter;

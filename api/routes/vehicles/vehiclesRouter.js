import express from "express";
import includeVehicleController from "../../controllers/includeVehicleController.js";
import excludeVehicleController from "../../controllers/excludeVehicleController.js";
import vehiclesListController from "../../controllers/vehiclesListController.js";
import vehicleController from "../../controllers/vehicleController.js";
import verifyAccess from "../../utils/verifyAccess.js";
const vehiclesRouter = express.Router();

vehiclesRouter
  .post("/include", verifyAccess, includeVehicleController)
  .get("/list/:id", verifyAccess, vehiclesListController)
  .delete("/excludeVehicle/:id", verifyAccess, excludeVehicleController)
  .get("/:id", vehicleController);

export default vehiclesRouter;

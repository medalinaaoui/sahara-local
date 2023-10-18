import express from "express";
import includeVehicleController from "../../controllers/includeVehicleController.js";
import verifyAccess from "../../utils/verifyAccess.js";
const vehiclesRouter = express.Router();

vehiclesRouter.post("/include", verifyAccess, includeVehicleController);

export default vehiclesRouter;

import express from "express";
import allVehicleController from "../../controllers/allVehicleController.js";
const allVehiclesRouter = express.Router();

allVehiclesRouter.get("/", allVehicleController);

export default allVehiclesRouter;

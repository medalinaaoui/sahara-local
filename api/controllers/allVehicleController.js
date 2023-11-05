import Vehicle from "../model/vehicle.js";
import errorHandler from "../utils/customError.js";

const vehiclesListController = async (req, res, next) => {
  try {
    const vehicles = await Vehicle.find();

    res.status(200).json(vehicles);
  } catch (error) {
    next(errorHandler(401, error));
  }
};
export default vehiclesListController;

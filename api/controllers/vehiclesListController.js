import Vehicle from "../model/vehicle.js";
import errorHandler from "../utils/customError.js";

const vehiclesListController = async (req, res, next) => {
  const owner = req.params.id;
  if (owner !== req.user) {
    next(errorHandler(402, "unauthorized"));
  } else {
    try {
      const vehicles = await Vehicle.find({ owner });
      res.status(200).json(vehicles);
    } catch (error) {
      next(error);
    }
  }
};
export default vehiclesListController;

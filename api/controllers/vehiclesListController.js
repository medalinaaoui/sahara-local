import Vehicle from "../model/vehicle.js";
import errorHandler from "../utils/customError.js";
import sendOrStore from "../model/redisFn.js";

const vehiclesListController = async (req, res, next) => {
  const owner = req.params.id;
  if (owner !== req.user) {
    next(errorHandler(402, "unauthorized"));
  } else {
    try {
      const userVehicles = await sendOrStore("userVehicles", async () => {
        const vehicles = await Vehicle.find({ owner });
        return vehicles;
      });
      res.status(200).json(userVehicles);
    } catch (error) {
      next(error);
    }
  }
};
export default vehiclesListController;

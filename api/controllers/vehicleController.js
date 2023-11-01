import Vehicle from "../model/vehicle.js";
import sendOrStore from "../model/redisFn.js";

const vehiclesListController = async (req, res, next) => {
  const vehicleId = req.params.id;
  console.log("vehicleId:", vehicleId);
  try {
    const vehicle = await sendOrStore(`vehicle?id=${vehicleId}`, async () => {
      const vehicle = await Vehicle.findById(vehicleId);
      return vehicle;
    });

    console.log("vehicle:", vehicle);

    res.status(200).json(vehicle);
  } catch (error) {
    next(error);
  }
};
export default vehiclesListController;

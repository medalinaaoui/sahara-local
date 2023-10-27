import Vehicle from "../model/vehicle.js";

const vehiclesListController = async (req, res, next) => {
  const vehicleId = req.params.id;
  console.log("vehicleId:", vehicleId);
  try {
    const vehicle = await Vehicle.findById(vehicleId);

    console.log("vehicle:", vehicle);

    res.status(200).json(vehicle);
  } catch (error) {
    next(error);
  }
};
export default vehiclesListController;

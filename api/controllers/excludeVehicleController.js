import Vehicle from "../model/vehicle.js";
const vehiclesListController = async (req, res, next) => {
  const vehicleId = req.params.id;
  const owner = req.user;

  try {
    const vehicle = await Vehicle.findOne({ _id: vehicleId });

    if (!vehicle) {
      res.status(404).json({
        message: "Vehicle not found",
      });
    } else if (vehicle.owner.toString() !== owner) {
      res.status(401).json({
        message: "You are not the owner of this vehicle",
      });
    } else {
      await Vehicle.findByIdAndDelete(vehicleId);
      res.status(200).json({
        status: "success",
        message: "Vehicle has been excluded successfully",
      });
    }
  } catch (error) {
    next(error);
  }
};

export default vehiclesListController;

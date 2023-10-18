import Vehicle from "../model/vehicle.js";
const includeVehicleController = async (req, res, next) => {
  const {
    make,
    model,
    pictures,
    year,
    color,
    price,
    mileage,
    engineType,
    transmission,
    owner,
    features,
    maintenanceHistory,
  } = req.body;

  try {
    const vehicle = await Vehicle.create(req.body);
    res.status(201).json({
      message: "Successfully created a new vehicle",
      data: vehicle,
    });
  } catch (error) {
    next(error);
  }
};

export default includeVehicleController;

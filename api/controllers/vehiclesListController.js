import Vehicle from "../model/vehicle.js";
import errorHandler from "../utils/customError.js";
import Redis from "ioredis";
// {
//   host: process.env.REDIS_HOST || "redis",
//   port: 6379,
// }
const redisClient = new Redis({
  host: process.env.REDIS_HOST || "redis",
});
const expirationTime = 60 * 60 * 30;

const vehiclesListController = async (req, res, next) => {
  const owner = req.params.id;
  if (owner !== req.user) {
    next(errorHandler(402, "unauthorized"));
  } else {
    try {
      redisClient.get("userVehicles", async (err, data) => {
        if (err) {
          console.log("redisClient.get ~ err:", err);
        } else if (data != null) {
          res.status(200).json(JSON.parse(data));
        } else {
          const vehicles = await Vehicle.find({ owner });
          redisClient.setex(
            "userVehicles",
            expirationTime,
            JSON.stringify(vehicles)
          );
        }
      });
    } catch (error) {
      next(error);
    }
  }
};
export default vehiclesListController;

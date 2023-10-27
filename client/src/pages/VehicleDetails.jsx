import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../utils/axios";
const VehicleDetails = () => {
  let params = useParams();
  const vehicleId = params.id;
  const [vehicle, setVehicle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchVehicleData = async () => {
    try {
      const vehicle = await axios.get(`/vehicles/${vehicleId}`);
      console.log("vehicle:", vehicle);
      if (vehicle.status === 200) {
        setVehicle(vehicle.data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log("fecthVehicleData ~ error:", error);
    }
  };

  useEffect(() => {
    fetchVehicleData();
  }, []);
  return (
    <div>
      {isLoading ? (
        "loading..."
      ) : (
        <div>
          <div className="pic flex flex-col items-center justify-center py-10 ">
            <div className="carousel w-3/5 rounded-xl">
              {vehicle?.pictures?.map((image, index) => (
                <div
                  key={index}
                  id={index + 1}
                  className="carousel-item w-full"
                >
                  <img src={image} className="w-full" />
                </div>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-center text-2xl font-semibold">
              {vehicle?.make}
            </h1>
            <h2 className="text-center text-lg font-semibold">
              {vehicle?.model}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};
export default VehicleDetails;

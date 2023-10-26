import axios from "../utils/axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BsFillTrashFill } from "react-icons/bs";

const OwnVehicle = () => {
  const [vehicles, setVehicles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const currUser = useSelector((state) => state.user.currUser);
  const showOwnVehicles = async () => {
    try {
      const res = await axios.get(`/vehicles/list/${currUser._id}`);
      if (res.status === 200) {
        setIsLoading(false);
        setVehicles(res.data);
        console.log(res.data);
      }
    } catch (error) {
      setIsLoading(false);
      console.log("showOwnVehicles ~ error:", error);
    }
  };
  useEffect(() => {
    showOwnVehicles();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Engine Type - Features</th>
            <th>Color</th>
            <th>Mileage</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            "loading..."
          ) : vehicles?.length > 0 ? (
            vehicles?.map((vehicle) => (
              <tr key={vehicle._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={vehicle.pictures[0]}
                          alt="main vehicle picture"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{vehicle.make}</div>
                      <div className="text-sm opacity-50">{vehicle.model}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {vehicle.engineType}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    <div
                      className="tooltip"
                      data-tip={vehicle.features.join(" - ")}
                    >
                      <span className="hover:cursor-pointer">
                        {vehicle.features[0].slice(0, 3).toUpperCase()}...
                      </span>
                    </div>
                  </span>
                </td>
                <td>{vehicle.color}</td>
                <td>{vehicle.mileage}mil</td>
                <td>{vehicle.price}$</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
                <th>
                  <button className="btn btn-ghost">
                    <BsFillTrashFill className="text-lg" />
                  </button>
                </th>
              </tr>
            ))
          ) : (
            <p>You didn&rsquo;t include any vehicle yet</p>
          )}
        </tbody>
      </table>
    </div>
  );
};
export default OwnVehicle;

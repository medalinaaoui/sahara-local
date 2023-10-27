import axios from "../utils/axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const OwnVehicle = () => {
  const [vehicles, setVehicles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);
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

  const excludeVehicle = async (id) => {
    try {
      const req = await axios.delete(`/vehicles/excludeVehicle/${id}`);
      if (req.status === 200) {
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
        }, 10000);
      }
    } catch (error) {
      console.log("excludeVehicle ~ error:", error);
    }
  };

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
                <td>
                  {vehicle.price}$
                  {showToast && (
                    <div className="toast">
                      <div className="alert alert-info">
                        <span>Vehicle have been excluded successfully</span>
                      </div>
                    </div>
                  )}
                </td>
                <th>
                  <Link to={`/vehicles/${vehicle._id}`}>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </Link>
                </th>
                <th>
                  <a href="#my_modal_8" className="btn">
                    <button className="">
                      <BsFillTrashFill className="text-lg" />
                    </button>
                  </a>
                  {/* Put this part before </body> tag */}
                  <div className="modal" id="my_modal_8">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg">Hello!</h3>
                      <p className="py-4">
                        You sure you want to exclude {vehicle.make} from your
                        profile
                      </p>
                      <div className="modal-action">
                        <a
                          href="#"
                          className="btn"
                          onClick={() => excludeVehicle(vehicle._id)}
                        >
                          Yes
                        </a>
                        <a href="#" className="btn">
                          No
                        </a>
                      </div>
                    </div>
                  </div>
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

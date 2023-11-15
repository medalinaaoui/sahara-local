import CarCard from "../componats/CarCard";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "../utils/axios";
import { carListData } from "../payload";

const CarsList = () => {
  const [vehicles, setVehicles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const currUser = useSelector((state) => state.user.currUser);
  const lang = useSelector((state) => state.user.language) || "arabic";
  const showVehicles = async () => {
    try {
      const res = await axios.get("/local/vehicles");
      if (res.status === 200) {
        setIsLoading(false);
        setVehicles(res.data);
        console.log(res.data);
      }
    } catch (error) {
      setIsLoading(false);
      console.log("showVehicles ~ error:", error);
    }
  };
  useEffect(() => {
    showVehicles();
  }, []);

  return (
    <div className="min-h-screen">
      {isLoading ? (
        <div className="h-screen w-screen flex justify-center items-center">
          <span className="loader"></span>
        </div>
      ) : (
        <>
          <div>
            <div className="h-6 w-4/5 bg-slate-600"></div>
          </div>
          <section className="grid">
            <h1>{carListData[lang].receAdded}</h1>
            <div className="grid grid-cols-4 gap-2">
              {vehicles?.map((car) => (
                <CarCard car={car} key={car._id} />
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
};
export default CarsList;

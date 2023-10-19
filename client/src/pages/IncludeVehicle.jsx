import { useState } from "react";

const IncludeVehicle = () => {
  const [features, setFeatures] = useState({
    airConditioning: false,
    powerWindows: false,
    GPSNavigation: false,
    sunroof: false,
    leatherSeats: false,
  });
  const [formData, setFormData] = useState({});

  const handleFeatureChange = (feature) => {
    setFeatures((prevFeatures) => ({
      ...prevFeatures,
      [feature]: !prevFeatures[feature],
    }));
  };
  const handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const testBtn = () => {
    const featuresArr = Object.keys(features).filter((key) => features[key]);
    console.log({ ...formData, features: featuresArr });
  };

  return (
    <div className="flex flex-col justify-center gap-8 items-center py-12 px-[13vw] h-[90vh]">
      <h1 className="text-3xl font-bold">Include Vehicle</h1>
      <div className="flex justify-between gap-12 w-full flex-1">
        <div className="flex flex-col gap-3">
          <input
            type="text"
            name="make"
            placeholder="Make ex(toyota, mercides...)"
            required
            onChange={handleInputChange}
            className="py-2 pl-2 "
          />

          <input
            type="text"
            name="model"
            placeholder="Model"
            required
            onChange={handleInputChange}
            className="py-2 pl-2"
          />

          <input
            type="text"
            name="color"
            placeholder="Color"
            onChange={handleInputChange}
            className="py-2 pl-2"
          />

          <input
            type="text"
            name="engineType"
            placeholder="Engine type"
            onChange={handleInputChange}
            className="py-2 pl-2"
          />
          <input
            type="text"
            name="transmission"
            placeholder="Transmission"
            onChange={handleInputChange}
            className="py-2 pl-2"
          />
          <div className="grid gap-3 grid-cols-2">
            <label className="flex gap-2 items-center">
              <input
                type="number"
                name="price"
                placeholder="Price"
                onChange={handleInputChange}
                className="py-1 w-24 px-2"
              />
              <span className="font-semibold">Price In $</span>
            </label>
            <label className="flex gap-2 items-center">
              <input
                type="number"
                name="year"
                placeholder="Year"
                min={1900}
                max={2030}
                required
                onChange={handleInputChange}
                className="py-1 w-24 px-2"
              />
              <span className="font-semibold">Year of Production</span>
            </label>
            <label className="flex gap-2 items-center">
              <input
                type="number"
                name="mileage"
                placeholder="Mileage"
                onChange={handleInputChange}
                className="py-1 w-24 px-2"
              />
              <span className="font-semibold">Mileage</span>
            </label>
          </div>
          <div className="flex flex-col gap-6 items-center">
            <h2 className="text-lg font-semibold">Car Features</h2>
            <div className="grid grid-cols-3 gap-3">
              <label className="flex items-center gap-4 cursor-pointer">
                <input
                  type="checkbox"
                  checked={features.airConditioning}
                  onChange={() => handleFeatureChange("airConditioning")}
                  className="checkbox"
                />
                <span className="label-text font-semibold">
                  Air Conditioning
                </span>
              </label>
              <label className="flex items-center gap-4 cursor-pointer">
                <input
                  type="checkbox"
                  checked={features.powerWindows}
                  className="checkbox"
                  onChange={() => handleFeatureChange("powerWindows")}
                />
                <span className="label-text font-semibold">Power Windows</span>
              </label>
              <label className="flex items-center gap-4 cursor-pointer">
                <input
                  className="checkbox"
                  type="checkbox"
                  checked={features.GPSNavigation}
                  onChange={() => handleFeatureChange("GPSNavigation")}
                />
                <span className="label-text font-semibold">GPS Navigation</span>
              </label>
              <label className="flex items-center gap-4 cursor-pointer">
                <input
                  className="checkbox"
                  type="checkbox"
                  checked={features.sunroof}
                  onChange={() => handleFeatureChange("sunroof")}
                />
                <span className="label-text font-semibold">Sunroof</span>
              </label>
              <label className="flex items-center gap-4 cursor-pointer">
                <input
                  className="checkbox"
                  type="checkbox"
                  checked={features.leatherSeats}
                  onChange={() => handleFeatureChange("leatherSeats")}
                />
                <span className="label-text font-semibold">Leather Seats</span>
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold">Images</h2>
          <p>Max amount of images 5</p>
          <input
            type="file"
            accept="image/*"
            className="file-input file-input-bordered file-input-secondary w-full max-w-xs"
          />
          <button onClick={testBtn} className="btn btn-outline btn-primary">
            Include the vehicle
          </button>
        </div>
      </div>
    </div>
  );
};
export default IncludeVehicle;

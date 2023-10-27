import { useEffect, useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../firebase";
import { useSelector } from "react-redux";
import customAxios from "../utils/axios";
const IncludeVehicle = () => {
  const currUser = useSelector((state) => state.user.currUser);
  const [features, setFeatures] = useState({
    airConditioning: false,
    powerWindows: false,
    GPSNavigation: false,
    sunroof: false,
    leatherSeats: false,
  });
  const [formData, setFormData] = useState({});
  const [images, setImages] = useState([]);
  const [pictures, setPictures] = useState([]);
  const [showMessage, setShowMessage] = useState("");
  const [uploadPer, setUploadPer] = useState(0);
  const [showLoading, setShowLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

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

  const handleImageUpload = async () => {
    if (images.length > 4) return setShowMessage("max number of images is 4");
    if (images.length === 0)
      return setShowMessage("cannot list a car without at least one image");

    const storage = getStorage(app);
    const uploadedImageUrls = [];

    for (const image of images) {
      const imageName = new Date().getTime() + image.name;
      const storageRef = ref(storage, imageName);
      const uploadTask = uploadBytesResumable(storageRef, image);

      try {
        setShowLoading(true);
        await new Promise((resolve, reject) => {
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              setUploadPer(Math.round(progress));
            },
            (error) => {
              setShowMessage("something went wrong please try again");
              console.log("error from include V uploadTask.on: ", error);
              reject(error);
            },
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                uploadedImageUrls.push(downloadURL);
                resolve();
              });
            }
          );
        });
      } catch (error) {
        console.log("error from include v catch block: ", error);
      }
    }

    console.log("Uploaded image URLs: ", uploadedImageUrls);
    setPictures(uploadedImageUrls);
    setUploadPer(0);
  };

  useEffect(() => {
    setTimeout(() => {
      setShowMessage("");
    }, 10000);
  }, [handleImageUpload]);

  const handleIncludeVehicle = async () => {
    const featuresArr = Object.keys(features).filter((key) => features[key]);
    console.log({
      ...formData,
      features: featuresArr,
      pictures,
      owner: currUser._id,
    });

    try {
      const req = await customAxios.post("/vehicles/include", {
        ...formData,
        features: featuresArr,
        pictures,
        owner: currUser._id,
      });
      if (req.status === 201) {
        setShowToast(true);
        setFormData({});
        setPictures([]);
        setImages([]);
        setTimeout(() => {
          setShowToast(false);
        }, 10000);
      }
      console.log("this is the response from req: ", req);
    } catch (error) {
      console.log("error from handleIncludeVehicle function: ", error);
    }
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
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Images</h2>
          <p>Max amount of images 5</p>
          <input
            multiple
            type="file"
            accept="image/*"
            onChange={(e) => setImages(e.target.files)}
            className="file-input file-input-bordered file-input-secondary w-full max-w-xs"
          />
          <div>
            <progress
              className={
                showLoading ? "progress progress-primary  w-full" : "invisible"
              }
              value={uploadPer}
              max="100"
            ></progress>
            <button
              type="button"
              onClick={handleImageUpload}
              className="btn btn-outline btn-primary w-full"
            >
              Upload Images
            </button>
          </div>
          <div className="w-full flex items-center justify-center">
            <button
              onClick={handleIncludeVehicle}
              className="btn btn-outline mt-2 h-48 rounded-full w-48"
            >
              Include the vehicle
            </button>
          </div>
          <div>
            <p
              className={
                showMessage.length > 0
                  ? "text-red-600 text-center font-semibold"
                  : "invisible"
              }
            >
              {showMessage}
            </p>
          </div>
          {showToast && (
            <div className="toast">
              <div className="alert alert-info">
                <span>You included the vehicle excluded successfully</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default IncludeVehicle;

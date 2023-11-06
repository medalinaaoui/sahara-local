import { useSelector } from "react-redux";
import { useState, useRef, useEffect } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { persistor } from "../store";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../firebase";
import customAxios from "../utils/axios";
import {
  updateStart,
  updateSuccess,
  updateFailure,
  deleteStart,
  deleteSuccess,
  deleteFailure,
} from "../features/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currUser = useSelector((state) => state.user.currUser);
  const error = useSelector((state) => state.user.error);
  const [loading, setLoading] = useState(false);
  const [file, setfile] = useState(undefined);
  const [uploadPer, setUploadPer] = useState(0);
  const [formData, setformData] = useState({});
  const [fileUploadError, setFileUploadError] = useState(false);
  const [showMessage, setShowMessage] = useState("");
  const fileInputRef = useRef(null);

  const handleInfosChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setformData({ ...formData, [name]: value });
  };

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadPer(Math.round(progress));
      },
      (error) => {
        setFileUploadError(true);
        console.log("error from uploadTask.on: ", error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setformData({ ...formData, profile_pic: downloadURL });
          setfile(null);
        });
      }
    );
  };

  useEffect(() => {
    if (file) handleFileUpload(file);
  }, [file]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    dispatch(updateStart());

    try {
      setLoading(true);
      const req = await customAxios.post(
        `/user/updateUser/${currUser._id}`,
        formData
      );
      dispatch(updateSuccess(req.data));
      setLoading(false);
      console.log("response from req in handleUpdate: ", req.data);
    } catch (error) {
      console.log("Error during updating user:", error);
      setLoading(false);
      dispatch(updateFailure(error.response.data.message));
    }
  };

  const deleteAccout = async () => {
    dispatch(deleteStart());

    try {
      const req = await customAxios.delete(`/user/updateUser/${currUser._id}`);
      console.log("response from deleteAccount: ", req);
      if (req.status === 200) {
        dispatch(deleteSuccess());
        localStorage.clear();
        navigate("/");
      }
    } catch (error) {
      console.log("Error during updating user:", error);
      dispatch(deleteFailure(error));
    }
  };
  const logout = async () => {
    dispatch(deleteStart());

    try {
      const req = await customAxios.get("user/updateUser/logout");
      console.log("response from logout: ", req);
      if (req.status === 200) {
        dispatch(deleteSuccess());
        await persistor.purge();
        window.location.reload(true);
      }
    } catch (error) {
      console.log("Error during logout user:", error);
      dispatch(deleteFailure(error));
    }
  };

  return (
    <div className="w-full flex flex-col gap-3 items-center justify-center h-screen">
      <h1 className="sm:text-3xl text-2xl font-semibold">Profile</h1>
      <input
        className="hidden"
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={(e) => setfile(e.target.files[0])}
      />
      <div className="w-28 aspect-square relative">
        <img
          src={formData.profile_pic || currUser.profile_pic}
          alt="profile pic"
          className="w-full h-full rounded-full"
        />
        <FaCloudUploadAlt
          onClick={() => fileInputRef.current.click()}
          className="text-3xl font-bold absolute bottom-0 right-2 cursor-pointer"
        />
        <span
          className={
            uploadPer > 0 && uploadPer < 100
              ? "absolute top-[46%] left-[37%] font-bold animate-bounce"
              : "hidden"
          }
        >
          {uploadPer}%
        </span>
      </div>
      {fileUploadError ? (
        <p className="text-red-600">
          uploading error: image must be less than 2mb
        </p>
      ) : uploadPer === 100 ? (
        <p className="text-green-600">image uploaded successfully</p>
      ) : (
        <p className="invisible">nothing</p>
      )}

      <form
        onSubmit={handleUpdate}
        className="flex flex-col gap-2 w-full items-center"
      >
        <input
          className="sm:py-2 py-1 px-1 w-4/5 sm:w-1/2 lg:w-1/3"
          onChange={handleInfosChange}
          defaultValue={currUser.username}
          name="username"
          type="text"
          placeholder="username"
        />
        <input
          className="sm:py-2 py-1 px-1 w-4/5 sm:w-1/2 lg:w-1/3"
          defaultValue={currUser.email}
          onChange={handleInfosChange}
          name="email"
          type="email"
          placeholder="username"
        />
        <button
          type="submit"
          disabled={loading}
          className="btn btn-sm bg-navColor hover:bg-black border-none btn-primary w-4/5 sm:w-1/2 lg:w-1/3"
        >
          {loading ? (
            <span className="loading loading-spinner loading-sm"></span>
          ) : (
            "Update"
          )}
        </button>

        <Link
          type="button"
          className="btn btn-sm  hover:bg-black border-none btn-primary w-4/5 sm:w-1/2 lg:w-1/3"
          to="/vehicles/include"
        >
          Include a vehicle
        </Link>
        <Link
          type="button"
          className="btn btn-sm bg-red-600 hover:bg-red-500 border-none btn-primary w-4/5 sm:w-1/2 lg:w-1/3"
          to="/vehicles/list"
        >
          My Vehicles
        </Link>

        <div className="flex justify-between w-4/5 sm:w-1/2 lg:w-1/3">
          <span
            type="button"
            className="text-red-600 font-semibold cursor-pointer"
            onClick={deleteAccout}
          >
            delete account
          </span>

          <button
            className="text-blue-900 font-semibold"
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            logout
          </button>
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box flex flex-col gap-3">
              <p className="text-center font-semibold">
                Do you want to logout?
              </p>
              <div className="w-full flex justify-around py-4">
                <button onClick={logout}>Yes</button>
                <form method="dialog">
                  <button className="">No</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </form>
      {error ? (
        <p className="text-red-600">error</p>
      ) : (
        <p className="invisible">nothing</p>
      )}
    </div>
  );
};
export default Profile;

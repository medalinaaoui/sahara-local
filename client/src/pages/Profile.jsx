import { useSelector } from "react-redux";
import { useState } from "react";

const Profile = () => {
  const currUser = useSelector((state) => state.user.currUser);
  const [loading, setLoading] = useState(false);
  return (
    <div className="w-full flex flex-col gap-3 items-center justify-center h-[90vh]">
      <h1 className="sm:text-3xl text-2xl font-semibold">Profile</h1>
      <div className="w-28 aspect-square ">
        <img
          src={currUser.profile_pic}
          alt="profile pic"
          className="object-contain rounded-full"
        />
      </div>
      <form className="flex flex-col gap-2 w-full items-center">
        <input
          className="sm:py-2 py-1 px-1 w-4/5 sm:w-1/2 lg:w-1/3"
          value={currUser.username}
          name="username"
          type="text"
          placeholder="username"
        />
        <input
          className="sm:py-2 py-1 px-1 w-4/5 sm:w-1/2 lg:w-1/3"
          value={currUser.email}
          name="username"
          type="text"
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
        <div className="flex justify-between w-4/5 sm:w-1/2 lg:w-1/3">
          <span className="text-red-600 font-semibold cursor-pointer">
            delete account
          </span>
          <span className="text-blue-600 font-semibold cursor-pointer">
            Logout
          </span>
        </div>
      </form>
    </div>
  );
};
export default Profile;

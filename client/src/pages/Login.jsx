import { useState } from "react";
import { Link } from "react-router-dom";
import customAxios from "../utils/axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Oauth from "../componats/Oauth";
import { loginStart, loginSuccess, loginFailure } from "../features/userSlice";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currUser, loading, error } = useSelector((state) => state.user);

  const [form, setForm] = useState({});
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    if (!form.username || !form.password) {
      dispatch(loginFailure("please fill the info"));
    } else {
      try {
        const req = await customAxios.post("/login", form);
        console.log(req);
        dispatch(loginSuccess(req.data.userInfo));
        console.log({ currUser });
        navigate("/");
      } catch (error) {
        console.log("Error during registration:", error.response.data.success);
        dispatch(loginFailure(error.response.data.message));
      }
    }
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-2 w-full">
        <h1 className="text-2xl font-bold uppercase text-center">Login</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 w-full items-center"
        >
          <input
            className="sm:py-2 py-1 px-1 w-1/3"
            onChange={handleChange}
            name="username"
            type="text"
            placeholder="username"
          />
          <input
            className="sm:py-2 py-1 px-1 w-1/3"
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="password"
          />
          <button
            type="submit"
            disabled={loading}
            className="btn btn-sm bg-navColor hover:bg-black border-none btn-primary w-1/3"
          >
            {loading ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              "Submit"
            )}
          </button>
          <Oauth />
        </form>
        <div className="flex gap-4">
          <p>You don't have an account?</p>{" "}
          <Link className="text-blue-600" to="/register">
            Register
          </Link>
        </div>
        <div className="text-red-600 text-center">
          {error && <span>{error.toString()}</span>}
        </div>
      </div>
    </div>
  );
};
export default Login;

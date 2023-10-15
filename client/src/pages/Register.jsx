import { useState } from "react";
import { Link } from "react-router-dom";
import customAxios from "../utils/axios";

const Register = () => {
  const [form, setForm] = useState({});
  const [customError, setCustomError] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!form.username || !form.email || !form.password) {
      setCustomError("please fill in the informations");
      setLoading(false);
    } else {
      try {
        const req = await customAxios.post("/register", form);
        console.log(req.data);
        setLoading(false);
      } catch (error) {
        console.log("Error during registration:", error.response.data.success);
        if (error.response.data.success === false) {
          setCustomError(error.response.data.message);
        }
        setLoading(false);
      }
    }
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-2 w-full">
        <h1 className="text-2xl font-bold uppercase text-center">Register</h1>
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
            name="email"
            type="email"
            placeholder="email"
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
          <button className="btn btn-sm border-none btn-primary w-1/3">
            Register with google
          </button>
        </form>
        <div className="flex gap-4">
          <p>Already have an account?</p>{" "}
          <Link className="text-blue-600" to="/login">
            login
          </Link>
        </div>
        <div className="text-red-600 text-center">
          {customError && <span>{customError.toString()}</span>}
        </div>
      </div>
    </div>
  );
};
export default Register;

import { useState } from "react";
import { Link } from "react-router-dom";
import customAxios from "../utils/axios";
import { useNavigate } from "react-router-dom";
import Oauth from "../componats/Oauth";
import { useSelector } from "react-redux";
import { registerData } from "../payload";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const [customError, setCustomError] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const lang = useSelector((state) => state.user.language) || "arabic";

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
        navigate("/login");
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
      <div className="flex flex-col justify-center items-center gap-6 w-full">
        <h1 className="text-2xl font-bold uppercase text-center">
          {registerData[lang].title}
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 w-full items-center"
        >
          <input
            className={`${
              lang === "arabic" ? "text-right" : ""
            } sm:py-2 py-1 px-1 w-1/3 `}
            onChange={handleChange}
            name="username"
            type="text"
            placeholder={registerData[lang].usernamePlaceholder}
          />
          <input
            className={`${
              lang === "arabic" ? "text-right" : ""
            } sm:py-2 py-1 px-1 w-1/3 `}
            onChange={handleChange}
            name="email"
            type="email"
            placeholder={registerData[lang].emailPlaceholder}
          />
          <input
            className={`${
              lang === "arabic" ? "text-right" : ""
            } sm:py-2 py-1 px-1 w-1/3 `}
            onChange={handleChange}
            name="password"
            type="password"
            placeholder={registerData[lang].passwordPlaceholder}
          />
          <button
            type="submit"
            disabled={loading}
            className="thebutton  btn btn-sm bg-secondary text-white hover:text-secondary w-1/3"
          >
            {loading ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              <>
                {registerData[lang].signInButtonLabel}
                <div className="arrow-wrapper">
                  <div className="arrow"></div>
                </div>
              </>
            )}
          </button>
          <Oauth text={registerData[lang].googleAuth} />
        </form>
        <div
          className={
            lang === "arabic" ? "flex gap-4 flex-row-reverse" : "flex gap-4"
          }
        >
          <p>{registerData[lang].alreadyHaveAcc} </p>
          <Link className="text-blue-600" to="/login">
            {registerData[lang].login.toLowerCase()}
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

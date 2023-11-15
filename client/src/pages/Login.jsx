import { useState } from "react";
import { Link } from "react-router-dom";
import customAxios from "../utils/axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Oauth from "../componats/Oauth";
import { loginStart, loginSuccess, loginFailure } from "../features/userSlice";
import { loginData } from "../payload";

const Login = () => {
  const lang = useSelector((state) => state.user.language) || "arabic";
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
    <section className="h-screen">
      <div className=" flex h-full justify-center items-center ">
        <div className="flex flex-col justify-center items-center gap-6 w-full ">
          <h1 className="text-2xl font-bold uppercase text-center">
            {loginData[lang].title}
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 w-full items-center"
          >
            <input
              className={`${
                lang === "arabic" ? "text-right" : ""
              } sm:py-2 py-1 px-1 w-2/3 sm:w-1/2 lg:w-1/3 `}
              onChange={handleChange}
              name="username"
              type="text"
              placeholder={loginData[lang].usernamePlaceholder}
            />
            <input
              className={`${
                lang === "arabic" ? "text-right" : ""
              } sm:py-2 py-1 px-1 w-2/3 sm:w-1/2 lg:w-1/3 `}
              onChange={handleChange}
              name="password"
              type="password"
              placeholder={loginData[lang].passwordPlaceholder}
            />
            <button
              type="submit"
              disabled={loading}
              className="thebutton btn btn-sm bg-secondary text-white hover:text-secondary w-2/3 sm:w-1/2 lg:w-1/3"
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                <>
                  {loginData[lang].loginButtonLabel}
                  <div className="arrow-wrapper">
                    <div className="arrow"></div>
                  </div>
                </>
              )}
            </button>
            <Oauth text={loginData[lang].googleAuth} />
          </form>
          <div
            className={
              lang === "arabic" ? "flex gap-4 flex-row-reverse" : "flex gap-4"
            }
          >
            <p>{loginData[lang].dontHaveAcc}</p>
            <Link className="text-blue-600" to="/register">
              {loginData[lang].register}
            </Link>
          </div>
          <div className="text-red-600 text-center">
            {error && <span>{error.toString()}</span>}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;

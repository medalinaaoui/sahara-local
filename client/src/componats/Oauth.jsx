import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase";
import customAxios from "../utils/axios";
import { loginStart, loginSuccess, loginFailure } from "../features/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Oauth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    dispatch(loginStart());
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const results = await signInWithPopup(auth, provider);
      const req = await customAxios.post("/signin-with-google", {
        name: results.user.displayName,
        email: results.user.email,
        avatar: results.user.photoURL,
      });
      dispatch(loginSuccess(req.data.userInfo));
      navigate("/");
      console.log("response of req from Oauth: ", req);
    } catch (error) {
      console.log("error from Oauth: ", error);
      dispatch(loginFailure(error.response.data.message));
    }
  };
  return (
    <button
      type="button"
      onClick={handleGoogleClick}
      className="btn btn-sm border-none btn-primary w-1/3"
    >
      Continue with google
    </button>
  );
};
export default Oauth;

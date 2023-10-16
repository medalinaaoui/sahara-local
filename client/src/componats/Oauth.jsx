import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase";
import customAxios from "../utils/axios";

const Oauth = () => {
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const results = await signInWithPopup(auth, provider);
      console.log(results);
      const req = await customAxios.post("/signin-with-google", {
        name: results.user.displayName,
        email: results.user.email,
        avatar: results.user.photoURL,
      });
      console.log("response of req from Oauth: ", req);
    } catch (error) {
      console.log("error from Oauth: ", error);
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

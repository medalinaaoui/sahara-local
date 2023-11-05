import mongoose from "mongoose";

const userScheme = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    profile_pic: {
      type: String,
      default:
        "https://firebasestorage.googleapis.com/v0/b/sahara-local.appspot.com/o/default-profile-icon-16.png?alt=media&token=e6945747-2f8c-42ca-aecb-1f1d15622094&_gl=1*2uvw56*_ga*MTYzNDIyMTk0My4xNjkwNDIyNDY5*_ga_CW55HF8NVT*MTY5OTIwOTcyNi4xMS4xLjE2OTkyMTE0MzQuNjAuMC4w",
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userScheme);

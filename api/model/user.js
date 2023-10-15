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
        "https://icon-library.com/images/default-profile-icon/default-profile-icon-16.jpg",
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userScheme);

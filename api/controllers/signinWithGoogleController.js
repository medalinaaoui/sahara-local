import bcrypt from "bcrypt";
import User from "../model/user.js";
import customError from "../utils/customError.js";
import jwt from "jsonwebtoken";
const loginController = async (req, res, next) => {
  const { name, email, avatar } = req.body;
  if (!name || !email || !avatar) {
    next(customError(401, "infos are required"));
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      const geneUsername =
        name.split(" ").join("") + Math.random().toString(36).slice(-8);
      const hashedPassword = bcrypt.hashSync(geneUsername, 12);
      const createUser = await User.create({
        username: geneUsername,
        email,
        profile_pic: avatar,
        password: hashedPassword,
      });
      const token = jwt.sign({ id: createUser._id }, process.env.JWT_SECRET);
      const { password: pwd, ...userInfo } = createUser._doc;
      res
        .status(201)
        .cookie("jwt", token, {
          httpOnly: true,
          secure: true,
        })
        .json({ message: "user created account successfully", userInfo });
    } else {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password: pwd, ...userInfo } = user._doc;
      res
        .cookie("jwt", token, {
          httpOnly: true,
          secure: true,
        })
        .status(200)
        .json({ message: "user logged in successfully", userInfo });
    }
  } catch (error) {
    next(error);
  }
};

export default loginController;

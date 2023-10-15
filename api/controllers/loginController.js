import bcrypt from "bcrypt";
import User from "../model/user.js";
import customError from "../utils/customError.js";
import jwt from "jsonwebtoken";
const loginController = async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(401).json({ message: "username and password are required" });
  }

  try {
    const user = await User.findOne({ username });
    if (!user) return next(customError(404, "user not found"));
    const isValidPassword = bcrypt.compareSync(password, user.password);
    if (!isValidPassword) return next(customError(403, "invalid password"));
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    const { password: pwd, ...userInfo } = user._doc;
    res
      .cookie("jwt", token, {
        httpOnly: true,
        secure: true,
      })
      .status(200)
      .json({ message: "user logged in successfully", userInfo });
  } catch (error) {
    next(error);
  }
};

export default loginController;

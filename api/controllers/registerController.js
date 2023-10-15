import bcrypt from "bcrypt";
import User from "../model/user.js";
const registerController = async (req, res, next) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password)
    res
      .status(401)
      .json({ message: "username, email, and password are required" });
  const hashedPassword = bcrypt.hashSync(password, 12);

  try {
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

export default registerController;

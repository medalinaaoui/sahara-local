import User from "../model/user.js";
import errorHandler from "../utils/customError.js";

const deleteUserController = async (req, res, next) => {
  const userId = req.params.id;

  if (userId !== req.user) return next(errorHandler(401, "unauthorized"));

  try {
    await User.findByIdAndDelete(userId);
    res.clearCookie("jwt", {
      httpOnly: true,
      secure: true,
    });
    res.status(200).json({
      message: "user deleted succeffuly",
    });
  } catch (error) {
    return next(error);
  }
};
export default deleteUserController;

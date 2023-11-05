import errorHandler from "../utils/customError.js";
import User from "../model/user.js";

const updateUserInfosController = async (req, res, next) => {
  const userId = req.params.id;
  const { language } = req.body;

  if (userId !== req.user) return next(errorHandler(401, "unathorized"));
  try {
    await User.findByIdAndUpdate(userId, {
      $set: {
        language,
      },
    });
    res
      .status(200)
      .json({ message: "user prefered language has been updated" });
  } catch (error) {
    next(error);
  }
};

export default updateUserInfosController;

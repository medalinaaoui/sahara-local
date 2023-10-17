import errorHandler from "../utils/customError.js";
import User from "../model/user.js";

const updateUserInfosController = async (req, res, next) => {
  const userId = req.params.id;
  const { username, email, profile_pic } = req.body.formData;

  if (userId !== req.user) return next(errorHandler(401, "unathorized"));
  try {
    const updateUser = await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          username,
          email,
          profile_pic,
        },
      },
      {
        new: true,
      }
    );
    const { password, ...results } = updateUser._doc;
    res.status(200).json(results);
  } catch (error) {
    next(error);
  }
};

export default updateUserInfosController;

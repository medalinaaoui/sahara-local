const logoutController = (req, res, next) => {
  try {
    res.clearCookie("jwt", {
      httpOnly: true,
      secure: true,
    });
    res.status(200).json({
      message: "user logout succeffuly",
    });
  } catch (error) {
    next(error);
  }
};

export default logoutController;

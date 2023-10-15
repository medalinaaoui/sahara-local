const errorHandling = (error, req, res, next) => {
  console.error("Error from error handler middleware:", error);
  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal server error";
  const errorId = error.errorId || "Id not available";
  const stack = process.env.NODE_ENV === "production" ? "" : error.stack;

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
    errorId,
    stack,
  });
};

export default errorHandling;

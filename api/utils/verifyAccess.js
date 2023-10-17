import jwt from "jsonwebtoken";
import errorHandler from "./customError.js";

const verifyAccess = (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) return next(errorHandler(401, "unathorized"));

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        return res.status(401).json({ message: "Token expired" });
      }
      return res.status(401).json({ message: "Invalid token" });
    }
    // If everything is fine, store the decoded user information in the request
    req.user = decoded.id;
    next();
  });
};

export default verifyAccess;

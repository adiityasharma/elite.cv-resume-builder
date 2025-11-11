import jwt from "jsonwebtoken";
import { ApiError } from "../utils/ApiError.js";


export const verifyJwt = (req, res, next) => {
  const token = req.cookies?.accessToken || req.headers?.authorization?.split(" ")[1];

  if (!token) {
    throw new ApiError(401, "Unauthorized")
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    next()
  } catch (error) {
    console.log(error)
    if (error.name === "TokenExpiredError") {
      throw new ApiError(401, "Token expired")
    }
    throw new ApiError(401, "Unauthorized")
  }
}
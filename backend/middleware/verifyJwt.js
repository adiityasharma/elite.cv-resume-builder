import jwt from "jsonwebtoken";
import { ApiError } from "../utils/ApiError.js";


export const verifyJwt = (req, res, next) => {
  const authHeader = req.headers?.authorization
  const token = req.cookies?.accessToken || ((authHeader && authHeader.startsWith("Bearer ")) && authHeader.split(" ")[1])

  if (!token) {
    throw new ApiError(401, "Unauthorized")
  }

  if (!process.env.JWT_SECRET) {
    console.error("❌ Missing JWT_SECRET in environment variables");
    throw new ApiError(500, "Internal Server Error");
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
    if (error.name === "JsonWebTokenError") {
      throw new ApiError(401, "Invalid token");
    }
    throw new ApiError(401, "Unauthorized")
  }
}
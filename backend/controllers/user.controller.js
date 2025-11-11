import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { generateJWT } from "../utils/generateJWT.js";
import jwt from "jsonwebtoken"

export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new ApiError(400, "All fields are required")
  }

  if (password.length < 6) {
    throw new ApiError(400, "Password must be at least 6 characters long")
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new ApiError(400, "User already exists")
  }



  const user = await User.create({
    name,
    email,
    password
  })

  res.status(201).json(
    new ApiResponse(201, "User created successfully", user)
  )
})

export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, "All fields are required")
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new ApiError(400, "User not found")
  }

  const isPasswordCorrect = await user.isPasswordCorrect(password);

  if (!isPasswordCorrect) {
    throw new ApiError(400, "Invalid credentials")
  }

  const accessToken = generateJWT({ id: user._id }, "1d")
  const refreshToken = generateJWT({ id: user._id }, "7d")

  const updatedUser = await User.findOneAndUpdate({ _id: user._id }, { refreshToken, accessToken }, { new: true }).select("-password -refreshToken")

  const options = {
    httpOnly: true,
    secure: true,
  }

  res.status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(200, "Login successful", updatedUser)
    )
})

export const refreshAccessToken = asyncHandler(async (req, res) => {
  const incomingRefreshToken = req.cookies?.refreshToken || req.body?.refreshToken;
  if (!incomingRefreshToken) {
    throw new ApiError(401, "Refresh token not found")
  }

  try {
    const decoded = jwt.verify(incomingRefreshToken, process.env.JWT_SECRET)
    const user = await User.findOne({ _id: decoded.id });

    if (!user) {
      throw new ApiError(401, "User not found or invalid token")
    }

    if (user.refreshToken !== incomingRefreshToken) {
      throw new ApiError(401, "Invalid or expired token")
    }

    const accessToken = generateJWT({ id: user._id }, "1d");
    const refreshToken = generateJWT({ id: user._id }, "7d");

    const updateUser = await User.findByIdAndUpdate({ _id: user._id }, { refreshToken, accessToken }, { new: true }).select("-password -refreshToken")

    const options = {
      httpOnly: true,
      secure: true,
    }

    return res.status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json(new ApiResponse(200, "Access Token refreshed successfully", updateUser))

  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid refresh token")
  }

})

export const logoutUser = asyncHandler(async (req, res) => {

  const options = {
    httpOnly: true,
    secure: true,
  }

  return res.status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, "Logout successful", {}))
})


export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id).select("-password -refreshToken")
  if(!user) {
    throw new ApiError(404, "User not found")
  }
  return res.status(200).json(new ApiResponse(200, "User profile", user))
})


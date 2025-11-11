import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { generateJWT } from "../utils/generateJWT.js";


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

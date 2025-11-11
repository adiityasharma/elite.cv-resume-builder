import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";


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



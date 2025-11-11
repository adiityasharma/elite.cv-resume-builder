import express from "express"
import { registerUser, loginUser, logoutUser, refreshAccessToken } from "../controllers/user.controller.js"
import { verifyJwt } from "../middleware/verifyJwt.js"

const router = express.Router()

router.post("/register", registerUser)

router.post("/login", loginUser)

router.post("/logout", verifyJwt, logoutUser)

router.post("/refresh-access-token", refreshAccessToken)

export default router;
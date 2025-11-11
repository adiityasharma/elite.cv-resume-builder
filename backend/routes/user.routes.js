import express from "express"
import { registerUser, loginUser } from "../controllers/user.controller.js"
import { verifyJwt } from "../middleware/verifyJwt.js"

const router = express.Router()

router.post("/register", registerUser)

router.post("/login", loginUser)

router.post("/home", verifyJwt, registerUser)

export default router;
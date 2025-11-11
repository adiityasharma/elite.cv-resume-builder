import express from "express"
import { registerUser } from "../controllers/user.controller.js"
import { verifyJwt } from "../middleware/verifyJwt.js"

const router = express.Router()

router.post("/register", registerUser)

// router.post("/register", registerUser)

router.post("/home", verifyJwt, registerUser)

export default router;
import express from "express";
import {
  createResume,
  getResumes,
  getResumeById,
  updateResume,
  deleteResume,
} from "../controllers/resume.controller.js";
import { verifyJwt } from "../middleware/verifyJwt.js";

const router = express.Router();

router.post("/",verifyJwt, createResume);
router.get("/", getResumes);
router.get("/:id", getResumeById);
router.put("/:id", updateResume);
router.delete("/:id", deleteResume);



export default router;
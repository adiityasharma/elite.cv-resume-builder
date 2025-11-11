import { Resume } from "../models/resume.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js"


// get all resumes of user
export const getResumes = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const resumes = await Resume.find({ userId })

  if (!resumes) {
    throw new ApiError(404, "Resumes not found")
  }
  return res.status(200)
    .json(new ApiResponse(200, "Resumes fetched successfully", resumes))
})

// create resume
export const createResume = asyncHandler(async (req, res) => {
  const userId = req.user.id;

  const { title, template, personalInfo, education, experiences, skills, projects, certifications, languages, interests, customSections, design } = req.body;

  const resume = await Resume.create({
    title,
    template,
    personalInfo,
    education,
    experiences,
    skills,
    projects,
    certifications,
    languages,
    interests,
    customSections,
    design,
    userId: userId,
  });
  return res.status(201)
    .json(new ApiResponse(201, "Resume created successfully", resume));
})

// get resume
export const getResumeById = asyncHandler(async (req, res) => {
  const resumeId = req.params.id
  if (!resumeId) {
    throw new ApiError(400, "Resume id is required")
  }
  const resume = await Resume.findById(req.params.id)

  if (!resume) {
    throw new ApiError(404, "Resume not found")
  }
  return res.status(200).json(new ApiResponse(200, "Resume found", resume))
})

// update resume
export const updateResume = asyncHandler(async (req, res) => {
  const resumeId = req.params.id;
  const updateResume = req.body;
  if (!resumeId) {
    throw new ApiError(400, "Resume id is required")
  }
  if (!updateResume) {
    throw new ApiError(400, "Resume data is required")
  }

  const resume = await Resume.findByIdAndUpdate(resumeId, { ...updateResume }, { new: true })

  if (!resume) {
    throw new ApiError(404, "Resume not found")
  }
  return res.status(200)
    .json(new ApiResponse(200, "Resume updated successfully", resume))
})

// delete resume
export const deleteResume = asyncHandler(async (req, res) => {
  const resumeId = req.params.id;
  if (!resumeId) {
    throw new ApiError(400, "Resume id is required")
  }
  const resume = await Resume.findByIdAndDelete(resumeId)
  if (!resume) {
    throw new ApiError(404, "Resume not found")
  }
  return res.status(200)
    .json(new ApiResponse(200, "Resume deleted successfully", resume))
})


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "Untitled",
  avatar: "",
  jobRole: "",
  personalInfo: {},
  education: [],
  experience: [],
  projects: [],
  skills: [],
  certifications: [],
  languages: [],
  interests: [],
  customSections: [],
  design: {},

}

export const resumeDataSlice = createSlice({
  name: "resumeData",
  initialState,
  reducers: {
    
  }
})

export const {  } = resumeDataSlice.actions;
export default resumeDataSlice.reducer;
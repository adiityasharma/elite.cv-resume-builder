import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "Untitled",
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
    personal_info: (state, action) => {
      state.personalInfo = {...state}
    }
  }
}) 
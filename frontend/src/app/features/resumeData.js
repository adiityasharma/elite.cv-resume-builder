import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "Untitled",
  avatar: "",
  jobRole: "",
  summary: "",
  personalInfo: {},
  education: [],
  experience: [],
  projects: [],
  skills: [],
  certificates: [],
  languages: [],
  interests: [],
  customSections: [],
  design: {},

}

export const resumeDataSlice = createSlice({
  name: "resumeData",
  initialState,
  reducers: {
    updatePersonalInfo: (state, action) => {
      state.personalInfo = { ...state.personalInfo, ...action.payload }
    },
    addEducation: (state, action) => {
      state.education.push({ id: Date.now(), ...action.payload })
    },
    deleteEducation: (state, action) => {
      const { id } = action.payload;
      const index = state.education.findIndex(item => item.id === id)

      if (index !== -1) {
        state.education = state.education.filter(item => item.id !== id)
      }
    },
    addExperience: (state, action) => {
      state.experience.push({ id: Date.now(), ...action.payload })
    },
    deleteExperience: (state, action) => {
      const { id } = action.payload;
      const index = state.experience.findIndex(item => item.id === id)

      if (index !== -1) {
        state.experience = state.experience.filter(item => item.id !== id)
      }
    },
    addSkill: (state, action) => {
      state.skills.push({ id: Date.now(), ...action.payload })
    },
    deleteSkill: (state, action) => {
      const { id } = action.payload;
      const index = state.skills.findIndex(item => item.id === id)

      if (index !== -1) {
        state.skills = state.skills.filter(item => item.id !== id)
      }
    },
    addSummary: (state, action) => {
      state.summary = action.payload
    },
    addLanguage: (state, action) => {
      state.languages.push({ id: Date.now(), ...action.payload })
    },
    deleteLanguage: (state, action) => {
      const { id } = action.payload;
      const index = state.languages.findIndex(item => item.id === id)

      if (index !== -1) {
        state.languages = state.languages.filter(item => item.id !== id)
      }
    },
    addProject: (state, action) => {
      state.projects.push({ id: Date.now(), ...action.payload })
    },
    deleteProject: (state, action) => {
      const { id } = action.payload;
      const index = state.projects.findIndex(item => item.id === id)

      if (index !== -1) {
        state.projects = state.projects.filter(item => item.id !== id)
      }
    },
    addCertificates: (state, action) => {
      state.certificates.push({ id: Date.now(), ...action.payload })
    },
    deleteCertificates: (state, action) => {
      const { id } = action.payload;
      const index = state.certificates.findIndex(item => item.id === id)

      if (index !== -1) {
        state.certificates = state.certificates.filter(item => item.id !== id)
      }
    },
  }
})

export const { updatePersonalInfo, deleteEducation, addEducation, addExperience, deleteExperience, addSkill, deleteSkill, addSummary, addLanguage, deleteLanguage, addProject, deleteProject, addCertificates, deleteCertificates } = resumeDataSlice.actions;
export default resumeDataSlice.reducer;
import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./features/authSlice"
import resumeDataSlice from "./features/resumeData"


export const store = configureStore({
  reducer: {
    auth: authSlice,
    resumeData: resumeDataSlice
  }
})


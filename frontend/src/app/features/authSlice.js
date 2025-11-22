import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  isLoggedIn: false,
  data: {},
  error: null
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {}
})



export default authSlice.reducer
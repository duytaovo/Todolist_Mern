import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
  name: "register",
  initialState: {
    user: {},
    error: {},
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase((state, action) => {
       
      })
  },
});


const registerReducer = registerSlice.reducer
export default registerReducer

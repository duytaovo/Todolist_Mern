import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    user: {},
    error: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase((state, action) => {
        
      })
  },
});


const loginReducer = loginSlice.reducer
export default loginReducer

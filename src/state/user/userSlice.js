import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//api
import { axiosLogin } from "../../api";

const initialState = {
  status: "idle",
  data: {
    accessToken: "",
    id: "",
  },
};
export const login = createAsyncThunk(
  "user/login",
  async (username, password) => {
    const res = await axiosLogin(username, password);
    console.log("login", res);
  }
);
let userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    saveInfo: (state, action) => {
      state = action.payload;
    },
    clearInfo: (state, action) => {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.status = "idle";
    });
  },
});

export const { saveInfo, clearInfo } = userSlice.actions;
export default userSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";

export const logoutUser = createAsyncThunk(
  "user/logoutUser",
  async (_, { dispatch }) => {
    dispatch(userLoggedOutAction());
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userCredentials) => {
    try {
      const response = await Axios.post(
        `http://localhost:3001/api/v1/user/login`,
        userCredentials
      );
      const data = response.data;
      return data;
    } catch (error) {
      throw error;
    }
  }
);
export const UserProfile = createAsyncThunk(
  "user/UserProfile",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.user.token;
    try {
      const response = await Axios.post(
        "http://localhost:3001/api/v1/user/profile",
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data.body);
      return response.data.body;
    } catch (error) {
      throw error;
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: null,
    token: null,
    error: null,
    userData: [],
  },
  reducers: {
    userLoggedOutAction: (state) => {
      state.loading = false;
      state.user = null;
      state.token = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.body.token;
        state.error = null;
      })
      .addCase(UserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        const error = action.error.message || "An error occurred during login.";
        console.error("Login error:", error);
        state.error = error;

        if (action.error.message.includes("400")) {
          state.error = "Invalid email or password.";
        } else if (action.error.message.includes("500")) {
          state.error = "An error occurred. Please try again later.";
        }
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.error = null;
        state.token = null;
      });
  },
});

export const { userLoggedOutAction } = userSlice.actions;
export default userSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";

// Action asynchrone pour la déconnexion de l'utilisateur
export const logoutUser = () => (dispatch) => {
  dispatch(userLoggedOutAction());
};

// Action asynchrone pour la connexion de l'utilisateur
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

// Définition du slice de l'utilisateur
const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: null,
    error: null,
  },
  reducers: {
    // Réduire l'action lorsque l'utilisateur est déconnecté
    userLoggedOutAction: (state) => {
      state.loading = false;
      state.user = null;
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
      });
  },
});

export const { userLoggedOutAction } = userSlice.actions;
export default userSlice.reducer;

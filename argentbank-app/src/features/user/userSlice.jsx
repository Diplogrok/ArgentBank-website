import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";

// Déconnexion de l'user
export const logoutUser = createAsyncThunk("user/logoutUser", async () => {});

// Connexion de l'user en envoyant une requête POST, en cas de réussite elle renvoie les données user
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

// Récupération du profil de l'user en envoyant une requête POST avec le token + vérifie si le profil a déjà été chargé
export const userProfile = createAsyncThunk(
  "user/UserProfile",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const { token, profileLoaded } = state.user;
    if (!profileLoaded) {
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

        return response.data.body;
      } catch (error) {
        throw error;
      }
    }
  }
);

// Mise à jour du profil (username) de l'user en envoyant une requête PUT
export const updateUserProfile = createAsyncThunk(
  "user/updateUserProfile",
  async (updatedProfileData, { getState }) => {
    try {
      const token = getState().user.token;
      await Axios.put(
        "http://localhost:3001/api/v1/user/profile",
        updatedProfileData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return updatedProfileData;
    } catch (error) {
      throw error;
    }
  }
);

// Création du slice de l'user
const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: null,
    token: null,
    error: null,
    userData: [],
    profileLoaded: false,
    profileData: null,
  },
  reducers: {},
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
      .addCase(userProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
        state.profileLoaded = true;
        state.profileData = action.payload;
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
        state.token = null;
        state.error = null;
        state.profileLoaded = false;
        state.profileData = null;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.profileData = action.payload;
      });
  },
});

export default userSlice.reducer;

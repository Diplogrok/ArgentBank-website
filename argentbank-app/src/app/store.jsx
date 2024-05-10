import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer, // Utilise le reducer userReducer pour gérer l'état de l'utilisateur
  },
});

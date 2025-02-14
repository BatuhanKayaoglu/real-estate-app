import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  token: "",

  user: {
    userId: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      console.log("action.payloadTOKKEN",action.payload);
      state.token = action.payload;
      AsyncStorage.setItem("token", action.payload);
    },
    setUser: (state, action) => {
      console.log("action.payload",action.payload);
      state.user.userId = action.payload.userId;
    },
    clearAuth: (state) => {
      state.token = "";
      state.user.username = "";
      state.user.password = "";
      AsyncStorage.removeItem("token");
    },
  },
});

export const { setToken, setUser, clearAuth } = authSlice.actions;
export default authSlice.reducer;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { changePassword, fetchUser, login, registerUser } from "./actions/authActions";
import axiosInstance from "../config/axios";
import { removeToken, storeToken } from "../storage/storage";
interface AppState {
  loading: number;
  token: string;
  signupDetails: {
    type: string;
  };
  transAdd: boolean;
  transaction: any;
  user: any;
  error: string | undefined;
}
const initialState: AppState = {
  loading: 0,
  token: "",
  signupDetails: {
    type: "register",
  },
  transAdd: false,
  transaction: { amount: "0.00" },
  user: {},
  error: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSignupDetails: (
      state,
      action: PayloadAction<{
        type: "register" | "phone" | "email";
        otp?: string;
        number?: string;
        email?: string;
      }>,
    ) => {
      state.signupDetails = action.payload;
    },
    signIn: (state) => {
      state.token = "Loggedin";
    },
    createTransaction: (state) => {
      state.transAdd = true;
      state.transaction = {
        bankName: "CIBC-LC",
        recipient: "Richard Q",
        type: "Deposit",
        time: "11:47 AM",
        amount: "160.00",
      };
    },
    logout: (state) => {
      state.user = undefined;
      state.token = "";
      removeToken();
      axiosInstance.interceptors.request.use((config) => {
        config.headers["auth-token"] = "";
        return config;
      });
    },
  },
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state) => {
        state.loading = 1;
        state.error = "";
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = 0;
        state.error = action.error?.message;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = 0;
        state.token = action.payload.data.authToken;
        state.user = action.payload.data.user;
        storeToken(action.payload.data.authToken);
        axiosInstance.interceptors.request.use((config) => {
          config.headers["auth-token"] = action.payload.data.authToken;
          return config;
        });
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = 1;
        state.error = "";
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = 0;
        state.error = action.error?.message;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = 0;
        state.token = action.payload.data.authToken;
        state.user = action.payload.data.user;
        storeToken(action.payload.data.authToken);
        axiosInstance.interceptors.request.use((config) => {
          config.headers["auth-token"] = action.payload.data.authToken;
          return config;
        });
      })
      .addCase(fetchUser.pending, (state) => {
        state.loading = 1;
        state.error = "";
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = 0;
        state.error = action.error?.message;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = 0;
        state.token = action.payload.data.authToken;
        state.user = action.payload.data.user;
      })
      .addCase(changePassword.pending, (state) => {
        state.loading = 1;
        state.error = "";
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.loading = 0;
        state.error = action.error.message;
      })
      .addCase(changePassword.fulfilled, (state) => {
        state.loading = 0;
      });
  },
});

export const { logout, setSignupDetails, signIn, createTransaction } = authSlice.actions;
const authReducer = authSlice.reducer;

export default authReducer;
